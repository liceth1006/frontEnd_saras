import { useState } from "react";
import FormBeneficiaryInfo from "../../../components/Beneficiary/FormBeneficiaryInfo";
import FormInvestmentProject from "../../../components/Beneficiary/FormInvestment/index.jsx";
import FormEnvironmentalManagement from "../../../components/Beneficiary/FormEnvironmentalManagement";
import useBeneficiaryInfConnection from "../../../hooks/beneficiaryInformation";
import useInvestmentProject from "../../../hooks/InvestmentProject.jsx";
import useProjectPermitsConnection from '../../../hooks/projectPermitsConnection.jsx'
import useEnvironmentalManagementConnection from "../../../hooks/useEnvironmentalManagement.jsx";
import useEnvironmentalSocialImpactConnection from '../../../hooks/environmentalSocialImpact.jsx'
import FormProjectPermits from "../../../components/Beneficiary/FormProjectPermits/index.jsx";
import FormEnvironmentalSocialImpact from "../../../components/Beneficiary/FormEnvironmentalSocialImpact/index.jsx";

const Form = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});

  const { postBeneficiaryInf } = useBeneficiaryInfConnection();
  const { postProjectPermits } = useProjectPermitsConnection();
  const { postInvestmentProject } = useInvestmentProject();
  const { postEnvironmentalSocialImpact } = useEnvironmentalSocialImpactConnection();
  const { postEnvironmentalManagement } =
    useEnvironmentalManagementConnection();

  const handleNext = () => {
    if (currentSection === 0) {
      // Save data from the current section to formData
      setFormData((prevData) => ({ ...prevData, ...formData }));
    }
    setCurrentSection((prevSection) => prevSection + 1);
  };

  const handleBack = () => {
    setCurrentSection((prevSection) => prevSection - 1);
  };

  const handleSubmit = async () => {
    try {
      // Log formData to debug the issue
      console.log("FormData before submitting:", formData);

      // Send beneficiary info
      const beneficiaryResponse = await postBeneficiaryInf(
        formData.mainActivity,
        formData.hasExclusion,
        formData.exclusions,
        formData.companyName,
        formData.companyDescription,
        formData.resources,
        formData.sector,
        formData.creditValue
      );

      // Check if beneficiaryResponse contains the required ID
      if (!beneficiaryResponse || !beneficiaryResponse.bene_info_id) {
        throw new Error("Beneficiary response does not contain an ID.");
      }

      const beneInfoId = beneficiaryResponse.bene_info_id;

      // Send investment project info
      const investmentResponse = await postInvestmentProject(
        beneInfoId,
        formData.projDescription,
        formData.phase,
        formData.totalTime,
        formData.totalProjectValue,
        formData.locationId,
        formData.typeCategoryId,
        formData.soilTypeId,
        formData.landUseId,
        formData.estimatedExecutionTime,
        formData.areaOrLength,
        formData.consultationProcedure,
        formData.publicAccessStudies
      );
      // Check if beneficiaryResponse contains the required ID
      if (!investmentResponse || !investmentResponse.investment_project_id) {
        throw new Error("Beneficiary response does not contain an ID.");
      }

      const inveProj = investmentResponse.investment_project_id;

      await postEnvironmentalManagement(
        inveProj,
        formData.environmental_management_department,
        formData.responsible_staff,
        formData.policies_guidelines,
        formData.iso_certifications,
        formData.legal_matrix,
        formData.identified_impacts,
        formData.complaints_mechanism,
        formData.complies_with_regulations,
        formData.environmental_supervision,
        formData.public_communication,
        formData.emergency_situations,
        formData.sanctioned,
        formData.environmental_liabilities,
        formData.complaints
      );

      await postProjectPermits(
        inveProj,
        formData.requires_environmental_diagnosis,
        formData.requires_environmental_license,
        formData.requires_other_permits,
        
      );

      await postEnvironmentalSocialImpact(
        inveProj,
        formData.has_management_plan,
        formData.impacts_on_water_air_soil,
        formData.impacts_on_flora_fauna_landscape,
        formData.impacts_on_social_labour
      )
    } catch (error) {
      // Log detailed error information
      console.log(error);
      console.error(
        "Error al enviar los datos:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      {currentSection === 0 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
              INFORMACIÓN GENERAL DEL BENEFICIARIO DEL CRÉDITO
            </h2>
          </div>

          <FormBeneficiaryInfo formData={formData} setFormData={setFormData} />
        </div>
      )}
      {currentSection === 1 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            GESTIÓN AMBIENTAL Y SOCIAL DEL BENEFICIARIO DEL CRÉDITO
            </h2>
          </div>
          <FormInvestmentProject
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
      {currentSection === 2 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
              INFORMACIÓN GENERAL DEL BENEFICIARIO DEL CRÉDITO
            </h2>
          </div>
          <FormEnvironmentalManagement
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
       {currentSection === 3 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            PERMISOS AMBIENTALES Y SOCIALES DEL PROYECTO O INVERSIÓN
            </h2>
          </div>
          <FormProjectPermits
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
       {currentSection === 4 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            IMPACTOS Y MEDIDAS DE MANEJO AMBIENTAL Y SOCIAL DEL PROYECTO O INVERSIÓN
            </h2>
          </div>
          <FormEnvironmentalSocialImpact
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
      {currentSection === 5 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            INSUMOS UTILIZADOS DEL PROYECTO O INVERSIÓN
            </h2>
          </div>
          <FormEnvironmentalSocialImpact
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
      {currentSection === 6 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            EMISIONES, VERTIMIENTOS Y RESIDUOS SOLIDOS DEL PROYECTO O INVERSIÓN
            </h2>
          </div>
          <FormEnvironmentalSocialImpact
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
      {currentSection === 7 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            SALUD Y SEGURIDAD DE LA COMUNIDAD
            </h2>
          </div>
          <FormEnvironmentalSocialImpact
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
      {currentSection === 8 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            TRABAJO Y CONDICIONES LABORALES
            </h2>
          </div>
          <FormEnvironmentalSocialImpact
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
      {currentSection === 9 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            GÉNERO
            </h2>
          </div>
          <FormEnvironmentalSocialImpact
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
      {currentSection === 10 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            DOCUMENTACIÓN SOPORTE  DEL PROYECTO O INVERSIÓN
            </h2>
          </div>
          <FormProjectPermits
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      )}
      

      <div className="flex justify-center space-x-4 mt-5 p-6 ">
        {currentSection > 0 && (
          <button
            onClick={handleBack}
            className="px-8 py-2  bg-btn-primary-color hover:bg-btn-primary-hover hover:text-white text-white rounded transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            Atrás
          </button>
        )}
        {currentSection < 10 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Siguiente
          </button>
        )}
        {currentSection === 10 && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Enviar
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
