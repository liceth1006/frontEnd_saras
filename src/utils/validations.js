// validations.js
import Swal from 'sweetalert2';
export const validateExclusions = (formData) => {
  if (formData.exclusions && formData.exclusions.length > 0) {
    Swal.fire({
      title: "Exclusión Seleccionada",
      text: "No puede continuar con el formulario porque ha seleccionado una exclusión. Por favor, comuníquese con un asesor para obtener más información.",
      icon: "warning",
      confirmButtonText: "Entendido"
    });
    return true; // Indica que se ha seleccionado una exclusión
  }
  return false; // No hay exclusiones seleccionadas
};



// Validaciones para la sección 0
export const validateSection0 = (formData) => {
  return formData.mainActivity &&
         formData.hasExclusion &&
         formData.companyName &&
         formData.companyDescription &&
         formData.resources &&
         formData.sector &&
         formData.creditValue;
};

// Validaciones para la sección 1
export const validateSection1 = (formData) => {
  return formData.projDescription &&
         formData.phase &&
         formData.totalProjectValue &&
         formData.locationId &&
         formData.typeCategoryId &&
         formData.soilTypeId &&
         formData.landUseId &&
         formData.estimatedExecutionTime &&
         formData.areaOrLength &&
         formData.consultationProcedure &&
         formData.publicAccessStudies;
};

// Validaciones para la sección 2
export const validateSection2 = (formData) => {
  return formData.environmental_management_department &&
         formData.responsible_staff &&
         formData.policies_guidelines &&
         formData.iso_certifications &&
         formData.legal_matrix &&
         formData.identified_impacts &&
         formData.complaints_mechanism &&
         formData.complies_with_regulations &&
         formData.environmental_supervision &&
         formData.public_communication &&
         formData.emergency_situations &&
         formData.sanctioned &&
         formData.environmental_liabilities &&
         formData.complaints;
};

// Validaciones para la sección 3
export const validateSection3 = (formData) => {
  return formData.requires_environmental_diagnosis &&
         formData.requires_environmental_license &&
         formData.requires_other_permits;
};

// Validaciones para la sección 4
export const validateSection4 = (formData) => {
  return formData.has_management_plan &&
         formData.impacts_on_water_air_soil &&
         formData.impacts_on_flora_fauna_landscape &&
         formData.impacts_on_social_labour;
};

// Validaciones para la sección 5
export const validateSection5 = (formData) => {
  return formData.water_source_for_project &&
         formData.water_source_for_workers &&
         formData.efficient_water_use_measures &&
         formData.uses_chemical_or_hazardous_products &&
         formData.uses_pesticides &&
         formData.requires_materials_from_quarries &&
         formData.type_of_lighting &&
         formData.energy_source &&
         formData.efficient_energy_use_measures &&
         formData.efficient_use_of_other_resources &&
         formData.integrates_clean_production_principles;
};

// Validaciones para la sección 6
export const validateSection6 = (formData) => {
  return formData.affected_by_natural_events &&
         formData.generates_air_emissions &&
         formData.measures_carbon_footprint &&
         formData.has_gei_reduction_measures &&
         formData.considers_climate_change_adaptation &&
         formData.generates_wastewater &&
         formData.measures_water_footprint &&
         formData.generates_hazardous_hospital_waste &&
         formData.generates_ordinary_demolition_waste &&
         formData.considers_historical_contamination &&
         formData.considers_resource_efficiency_indicators;
};

// Validaciones para la sección 7
export const validateSection7 = (formData) => {
  return formData.avoids_chemicals_pesticides &&
         formData.avoids_air_contaminants_dust &&
         formData.avoids_dismantling_old_infrastructure &&
         formData.avoids_vehicle_movement &&
         formData.avoids_unqualified_security &&
         formData.trained_security_personnel &&
         formData.avoids_large_water_use &&
         formData.has_complaint_mechanism &&
         formData.avoids_unpleasant_odors &&
         formData.avoids_excessive_noise &&
         formData.has_community_engagement_mechanisms &&
         formData.takes_covid19_precautions;
};

// Validaciones para la sección 8
export const validateSection8 = (formData) => {
  return formData.hiring_non_discriminatory &&
         formData.equal_labor_conditions &&
         formData.workers_know_rights &&
         formData.training_program &&
         formData.temporary_workers_min_salary &&
         formData.respect_union_agreements &&
         formData.foreign_workers_equal_conditions &&
         formData.accommodation_services_verified &&
         formData.forced_labor_trafficking_check &&
         formData.age_verification &&
         formData.child_labor_risk_management &&
         formData.work_permits_usage &&
         formData.pqr_mechanism &&
         formData.avoids_mass_terminations &&
         formData.individual_termination_compliance &&
         formData.accidents_incidents_recorded &&
         formData.workers_affiliated &&
         formData.workers_know_safety_hazards &&
         formData.emergency_procedures &&
         formData.emergency_instructions_clear &&
         formData.sg_sst_compliant;
};

// Validaciones para la sección 9
export const validateSection9 = (formData) => {
  return formData.discriminates_gender_benefits &&
         formData.sexual_abuse_reports &&
         formData.sexual_harassment_reports &&
         formData.discrimination_against_women_reports &&
         formData.discrimination_orientation_gender_reports &&
         formData.sexual_exploitation_reports &&
         formData.lacks_gender_equality_policies;
};

// Validaciones para la sección 10
export const validateSection10 = (formData) => {
  return formData.selectedAreas && formData.selectedAreas.length > 0;
};
