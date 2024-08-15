import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useLaborConditionsConnection = () => {
  const { token } = useAuth();
  const URL_LABOR_CONDITIONS = "/labor-conditions";

  // Función asíncrona para crear un nuevo registro de condiciones laborales
  const postLaborConditions = async (
    bene_info_id,
    hiring_non_discriminatory,
    equal_labor_conditions,
    workers_know_rights,
    training_program,
    temporary_workers_min_salary,
    respect_union_agreements,
    foreign_workers_equal_conditions,
    accommodation_services_verified,
    forced_labor_trafficking_check,
    age_verification,
    child_labor_risk_management,
    work_permits_usage,
    pqr_mechanism,
    avoids_mass_terminations,
    individual_termination_compliance,
    accidents_incidents_recorded,
    workers_affiliated,
    workers_know_safety_hazards,
    emergency_procedures,
    emergency_instructions_clear,
    sg_sst_compliant
  ) => {
    try {
      const res = await apiClient.post(
        URL_LABOR_CONDITIONS,
        {
          bene_info_id,
          hiring_non_discriminatory,
          equal_labor_conditions,
          workers_know_rights,
          training_program,
          temporary_workers_min_salary,
          respect_union_agreements,
          foreign_workers_equal_conditions,
          accommodation_services_verified,
          forced_labor_trafficking_check,
          age_verification,
          child_labor_risk_management,
          work_permits_usage,
          pqr_mechanism,
          avoids_mass_terminations,
          individual_termination_compliance,
          accidents_incidents_recorded,
          workers_affiliated,
          workers_know_safety_hazards,
          emergency_procedures,
          emergency_instructions_clear,
          sg_sst_compliant
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      if (error.response) {
        console.error("Error en la respuesta:", error.response.data);
        throw error.response.data;
      } else if (error.request) {
        console.error("Error en la solicitud:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  // Función asíncrona para obtener los detalles de un registro de condiciones laborales por ID
  const getLaborConditionsDetails = useCallback(
    async (id) => {
      try {
        // Realiza la solicitud GET utilizando apiClient
        const res = await apiClient.get(
          `${URL_LABOR_CONDITIONS}/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return res.data; // Asumiendo que quieres devolver los datos de la respuesta
      } catch (error) {
        if (error.response) {
          console.error("Error en la respuesta:", error.response.data);
          throw error.response.data;
        } else if (error.request) {
          console.error("Error en la solicitud:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    },
    [token]
  );

  return {
    postLaborConditions,
    getLaborConditionsDetails,
  };
};

export default useLaborConditionsConnection;
