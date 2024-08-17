import { useState } from "react";
import Swal from 'sweetalert2';
import FormBeneficiaryInfo from "../../../components/Beneficiary/FormBeneficiaryInfo/index.jsx";
import useBeneficiaryInfConnection from "../../../hooks/beneficiaryInformation.jsx";
import useCapitalProject from "../../../hooks/capitalProject.jsx";
import usePermits from '../../../hooks/capitalPermit.jsx'

import useCreditBeneficiaryEnvironmentalInfo from "../../../hooks/creditBeneficiaryEnvironmentalInfo.jsx"
import useProjectCapitalEmissions from '../../../hooks/projectCapitalEmissions.jsx'
import useGenderIssuesConnection from "../../../hooks/genderIssues.jsx";
import FormGenderIssues from "../../../components/Beneficiary/FormGenderIssues/index.jsx";
import useLaborConditionsConnection from "../../../hooks/laborConditions.jsx";
import FormLaborConditions from "../../../components/Beneficiary/FormLaborConditions/index.jsx";

import { validateExclusions,validateSection0, validateSection1,validateSection2,validateSection3,validateSection4,validateSection5,validateSection6,validateSection7,validateSection8,validateSection9  } from '../../../utils/validations.js';
import FormCreditBeneficiaryEnvironmental from "../../../components/Beneficiary/FormCreditBeneficiaryEnvironmental/index.jsx";
import FormProjectCapitalEmissions from "../../../components/Beneficiary/FormProjectCapitalEmissions.jsx/index.jsx";
import FormCapitalProjectInputs from "../../../components/Beneficiary/FormCapitalProjectInputs/index.jsx";
import FormPermit from "../../../components/Beneficiary/FormPermit/index.jsx";

const FormCapitalProject = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({selectedPermit: [],
    projectPermits: "",});

  const { postBeneficiaryInf } = useBeneficiaryInfConnection();
  const { postProjectCapitalEmissions } = useProjectCapitalEmissions();
  const { postCapitalProject } = useCapitalProject();
  const { postGenderIssues } = useGenderIssuesConnection();
  const { postLaborConditions } = useLaborConditionsConnection();
  const { postPermit } = usePermits();
  const { postCreditBeneficiaryEnvironmentalInfo } = useCreditBeneficiaryEnvironmentalInfo();

  
  const handleNext = () => {

    // Validar si se ha seleccionado una exclusión
    if (validateExclusions(formData)) {
      return; // Detener la navegación si hay una exclusión
    }

    let isValid = true;
  
     // Validar la sección actual
    //  switch (currentSection) {
    //   case 0:
    //     isValid = validateSection0(formData);
    //     break;
    //   case 1:
    //     isValid = validateSection1(formData);
    //     break;
    //   case 2:
    //     isValid = validateSection2(formData);
    //     break;
    //   case 3:
    //     isValid = validateSection3(formData);
    //     break;
    //   case 4:
    //     isValid = validateSection4(formData);
    //     break;
    //   case 5:
    //     isValid = validateSection5(formData);
    //     break;
    //   case 6:
    //     isValid = validateSection6(formData);
    //     break;
    //   case 7:
    //     isValid = validateSection7(formData);
    //     break;
    //   case 8:
    //     isValid = validateSection8(formData);
    //     break;
    //   case 9:
    //     isValid = validateSection9(formData);
    //     break;
    //   // case 10:
    //   //   isValid = validateSection10(formData);
    //   //   break;
    //   default:
    //     isValid = false;
    // }

    if (isValid) {
      setFormData((prevData) => ({ ...prevData, ...formData }));
      setCurrentSection((prevSection) => prevSection + 1);
    } else {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor, complete todos los campos requeridos antes de continuar.",
        icon: "warning",
        confirmButtonText: "Entendido",
        customClass: {
          confirmButton: 'custom-button' 
      }
      });
    }
  }




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

      const capitalProject = await postCapitalProject  (beneInfoId)

      // Check if beneficiaryResponse contains the required ID
      if (!capitalProject || !capitalProject.capital_project_id) {
        throw new Error("Beneficiary response does not contain an ID.");
      }

      const capiProj = capitalProject.capital_project_id;

     await postCreditBeneficiaryEnvironmentalInfo  (
      capiProj,
          formData.debt_substitution,
          formData.has_environmental_department,
          formData.has_environmental_policies,
          formData.environmental_certifications,
          formData.known_impacts,
          formData.environmental_programs,
          formData.legal_requirements_documented,
          formData.public_communication,
          formData.public_communication_details,
          formData.supervision_activities,
          formData.accident_emergency_management,
          formData.labor_norms_compliance,
          formData.grievance_mechanism,
          formData.environmental_liabilities
        ) 

  await    postProjectCapitalEmissions (
    capiProj,
          formData.equipment_emissions,
          formData.equipment_details,
          formData.carbon_footprint,
          formData.wastewater_disposal,
          formData.treatment_required,
          formData.hazardous_waste_generation,
          formData.quantity_measured,
          formData.respel_registration,
          formData.hazardous_waste_management,
          formData.ordinary_waste_management
        )
    

      await postLaborConditions(
        beneInfoId,
        formData.hiring_non_discriminatory,
        formData.equal_labor_conditions,
        formData.workers_know_rights,
        formData.training_program,
        formData.temporary_workers_min_salary,
        formData.respect_union_agreements,
        formData.foreign_workers_equal_conditions,
        formData.accommodation_services_verified,
        formData.forced_labor_trafficking_check,
        formData.age_verification,
        formData.child_labor_risk_management,
        formData.work_permits_usage,
        formData.pqr_mechanism,
        formData.avoids_mass_terminations,
        formData.individual_termination_compliance,
        formData.accidents_incidents_recorded,
        formData.workers_affiliated,
        formData.workers_know_safety_hazards,
        formData.emergency_procedures,
        formData.emergency_instructions_clear,
        formData.sg_sst_compliant
      );

      await postGenderIssues(
        beneInfoId,
        formData.discriminates_gender_benefits,
        formData.sexual_abuse_reports,
        formData.sexual_harassment_reports,
        formData.discrimination_against_women_reports,
        formData.discrimination_orientation_gender_reports,
        formData.sexual_exploitation_reports,
        formData.lacks_gender_equality_policies
      );

      for (const permit of formData.selectedPermit) {
        const response = await postPermit (
          capiProj,
            permit.perm_id,
            permit.status,
            permit.resolution_number,
            permit.resolution_year,
            permit.issuing_entity
          )
        console.log("Respuesta de la API para área:", response);
      }

       // Mostrar la alerta SweetAlert2 al finalizar con éxito
    Swal.fire({
      title: "Éxito",
      text: "¡Los datos se han enviado correctamente!",
      icon: "success",
      customClass: {
        confirmButton: 'custom-button' 
    }
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.location.href = "Mis%20proyectos";

    } catch (error) {
      // Log detailed error information
      console.log(error);
      console.error(
        "Error al enviar los datos:",
        error.response ? error.response.data : error.message
      );
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo.",
        icon: "error",
        customClass: {
          confirmButton: 'custom-button' 
      }
      });
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
            INFORMACIÓN AMBIENTAL Y SOCIAL DEL BENEFICIARIO EL CRÉDITO
            </h2>
          </div>
          <FormCreditBeneficiaryEnvironmental
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
            PERMISOS AMBIENTALES Y SOCIALES
            </h2>
          </div>
          <FormPermit
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
            INSUMOS UTILIZADOS  
            </h2>
          </div>
          <FormCapitalProjectInputs formData={formData} setFormData={setFormData} />
        </div>
      )}
      {currentSection === 4 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            EMISIONES, VERTIMIENTOS Y RESIDUOS SOLIDOS
            </h2>
          </div>
          <FormProjectCapitalEmissions
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
            TRABAJO Y CONDICIONES LABORALES
            </h2>
          </div>
          <FormLaborConditions formData={formData} setFormData={setFormData} />
        </div>
      )}
      {currentSection === 6 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            GÉNERO
            </h2>
          </div>
          <FormGenderIssues formData={formData} setFormData={setFormData} />
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
        {currentSection < 6 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Siguiente
          </button>
        )}
        {currentSection === 6 && (
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

export default FormCapitalProject;
