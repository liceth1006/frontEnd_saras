import { useState } from "react";
import Swal from 'sweetalert2';
import FormBeneficiaryInfo from "../../../components/Beneficiary/FormBeneficiaryInfo";
import FormInvestmentProject from "../../../components/Beneficiary/FormInvestment/index.jsx";
import FormEnvironmentalManagement from "../../../components/Beneficiary/FormEnvironmentalManagement";
import useBeneficiaryInfConnection from "../../../hooks/beneficiaryInformation";
import useInvestmentProject from "../../../hooks/InvestmentProject.jsx";
import useProjectPermitsConnection from "../../../hooks/projectPermitsConnection.jsx";
import useEnvironmentalManagementConnection from "../../../hooks/useEnvironmentalManagement.jsx";
import useEnvironmentalSocialImpactConnection from "../../../hooks/environmentalSocialImpact.jsx";
import FormProjectPermits from "../../../components/Beneficiary/FormProjectPermits/index.jsx";
import FormEnvironmentalSocialImpact from "../../../components/Beneficiary/FormEnvironmentalSocialImpact/index.jsx";
import useGenderIssuesConnection from "../../../hooks/genderIssues.jsx";
import FormGenderIssues from "../../../components/Beneficiary/FormGenderIssues/index.jsx";
import useLaborConditionsConnection from "../../../hooks/laborConditions.jsx";
import useCommunityHealthSafetyConnection from "../../../hooks/communityHealthSafety.jsx";
import FormLaborConditions from "../../../components/Beneficiary/FormLaborConditions/index.jsx";
import FormCommunityHealthSafety from "../../../components/Beneficiary/FormCommunityHealthSafety/index.jsx";
import ProjectEmissionsWaste from "../../../components/Beneficiary/ProjectEmissionsWaste/index.jsx";
import useProjectInputsConnection from "../../../hooks/projectInputs.jsx";
import FormProjectInputs from "../../../components/Beneficiary/FormProjectInputs/index.jsx";
import useProjectEmissionsWasteConnection from '../../../hooks/projectEmissionsWaste.jsx'
import FormProjectAreas from "../../../components/Beneficiary/FormProjectAreas/index.jsx";
import useProjectAreas from '../../../hooks/projectAreas.jsx'
import { validateExclusions,validateSection0, validateSection1,validateSection2,validateSection3,validateSection4,validateSection5,validateSection6,validateSection7,validateSection8,validateSection9  } from '../../../utils/validations.js';

const Form = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({selectedAreas: [],
    projectAreas: "",});

  const { postBeneficiaryInf } = useBeneficiaryInfConnection();
  const { postProjectPermits } = useProjectPermitsConnection();
  const { postInvestmentProject } = useInvestmentProject();
  const { postEnvironmentalSocialImpact } =
    useEnvironmentalSocialImpactConnection();
  const { postEnvironmentalManagement } =
    useEnvironmentalManagementConnection();
  const { postGenderIssues } = useGenderIssuesConnection();
  const { postLaborConditions } = useLaborConditionsConnection();
  const { postCommunityHealthSafety } = useCommunityHealthSafetyConnection();
  const { postProjectInputs } = useProjectInputsConnection();
  const { postProjectEmissionsWaste } = useProjectEmissionsWasteConnection();
  const { postProjectAreas } = useProjectAreas();

  
  const handleNext = () => {

    // Validar si se ha seleccionado una exclusión
    if (validateExclusions(formData)) {
      return; // Detener la navegación si hay una exclusión
    }

    let isValid = true;
  
     // Validar la sección actual
     switch (currentSection) {
      case 0:
        isValid = validateSection0(formData);
        break;
      case 1:
        isValid = validateSection1(formData);
        break;
      case 2:
        isValid = validateSection2(formData);
        break;
      case 3:
        isValid = validateSection3(formData);
        break;
      case 4:
        isValid = validateSection4(formData);
        break;
      case 5:
        isValid = validateSection5(formData);
        break;
      case 6:
        isValid = validateSection6(formData);
        break;
      case 7:
        isValid = validateSection7(formData);
        break;
      case 8:
        isValid = validateSection8(formData);
        break;
      case 9:
        isValid = validateSection9(formData);
        break;
      // case 10:
      //   isValid = validateSection10(formData);
      //   break;
      default:
        isValid = false;
    }

    if (isValid) {
      setFormData((prevData) => ({ ...prevData, ...formData }));
      setCurrentSection((prevSection) => prevSection + 1);
    } else {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor, complete todos los campos requeridos antes de continuar.",
        icon: "warning",
        confirmButtonText: "Entendido"
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
        formData.requires_other_permits
      );

      await postEnvironmentalSocialImpact(
        inveProj,
        formData.has_management_plan,
        formData.impacts_on_water_air_soil,
        formData.impacts_on_flora_fauna_landscape,
        formData.impacts_on_social_labour
      );
     await postProjectInputs(
        inveProj,
        formData.water_source_for_project,
        formData.water_source_for_workers,
        formData.efficient_water_use_measures,
        formData.uses_chemical_or_hazardous_products,
        formData.uses_pesticides,
        formData.requires_materials_from_quarries,
        formData.type_of_lighting,
        formData.energy_source,
        formData.efficient_energy_use_measures,
        formData.efficient_use_of_other_resources,
        formData.integrates_clean_production_principles
      );

      const response = await postProjectEmissionsWaste(
        inveProj,
        formData.affected_by_natural_events,
        formData.generates_air_emissions,
        formData.measures_carbon_footprint,
        formData.has_gei_reduction_measures,
        formData.considers_climate_change_adaptation,
        formData.generates_wastewater,
        formData.measures_water_footprint,
        formData.generates_hazardous_hospital_waste,
        formData.generates_ordinary_demolition_waste,
        formData.considers_historical_contamination,
        formData.considers_resource_efficiency_indicators
      );
      
      console.log("Respuesta de la API:", response);

      await postCommunityHealthSafety(
        inveProj,
        formData.avoids_chemicals_pesticides,
        formData.avoids_air_contaminants_dust,
        formData.avoids_dismantling_old_infrastructure,
        formData.avoids_vehicle_movement,
        formData.avoids_unqualified_security,
        formData.trained_security_personnel,
        formData.avoids_large_water_use,
        formData.has_complaint_mechanism,
        formData.avoids_unpleasant_odors,
        formData.avoids_excessive_noise,
        formData.has_community_engagement_mechanisms,
        formData.takes_covid19_precautions
      );
    

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

      for (const area of formData.selectedAreas) {
        const response = await postProjectAreas(inveProj, area.area_id);
        console.log("Respuesta de la API para área:", response);
      }

       // Mostrar la alerta SweetAlert2 al finalizar con éxito
    Swal.fire({
      title: "Éxito",
      text: "¡Los datos se han enviado correctamente!",
      icon: "success"
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
        icon: "error"
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
            INFORMACIÓN DEL PROYECTO O INVERSIÓN
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
            GESTIÓN AMBIENTAL Y SOCIAL DEL BENEFICIARIO DEL CRÉDITO
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
          <FormProjectPermits formData={formData} setFormData={setFormData} />
        </div>
      )}
      {currentSection === 4 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
              IMPACTOS Y MEDIDAS DE MANEJO AMBIENTAL Y SOCIAL DEL PROYECTO O
              INVERSIÓN
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
          <FormProjectInputs formData={formData} setFormData={setFormData} />
        </div>
      )}
      {currentSection === 6 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
              EMISIONES, VERTIMIENTOS Y RESIDUOS SOLIDOS DEL PROYECTO O
              INVERSIÓN
            </h2>
          </div>
          <ProjectEmissionsWaste
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
          <FormCommunityHealthSafety
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
          <FormLaborConditions formData={formData} setFormData={setFormData} />
        </div>
      )}
      {currentSection === 9 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">GÉNERO</h2>
          </div>
          <FormGenderIssues formData={formData} setFormData={setFormData} />
        </div>
      )}
        {currentSection === 10 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
            ZONAS AFECTADAS POR EL PROYECTO/INVERSIÓN 
            </h2>
          </div>
          <FormProjectAreas formData={formData} setFormData={setFormData} />
        </div>
      )}
      {/* {currentSection === 10 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
              DOCUMENTACIÓN SOPORTE DEL PROYECTO O INVERSIÓN
            </h2>
          </div>
          <FormProjectPermits formData={formData} setFormData={setFormData} />
        </div>
      )} */}

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
