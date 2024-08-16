import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js"; // Ajusta la ruta si es necesario
import { useCallback } from "react";

const useCapitalProjectInputs = () => {
  const { token } = useAuth();
  const URL_CAPITAL_PROJECT_INPUTS = "/capital-project-inputs";

  // Función asíncrona para crear un nuevo registro de entradas del proyecto de capital
  const postCapitalProjectInputs = useCallback(
    async (
      capital_project_id,
      water_source_for_activities,
      water_treatment_for_activities,
      water_source_for_consumption,
      water_treatment_for_consumption,
      chemicals_use,
      chemicals_details,
      chemical_storage_safety,
      energy_source,
      lighting_type
    ) => {
      console.log((
        capital_project_id,
        water_source_for_activities,
        water_treatment_for_activities,
        water_source_for_consumption,
        water_treatment_for_consumption,
        chemicals_use,
        chemicals_details,
        chemical_storage_safety,
        energy_source,
        lighting_type
      ));
      try {
        const res = await apiClient.post(
          URL_CAPITAL_PROJECT_INPUTS,
          {
            capital_project_id,
            water_source_for_activities,
            water_treatment_for_activities,
            water_source_for_consumption,
            water_treatment_for_consumption,
            chemicals_use,
            chemicals_details,
            chemical_storage_safety,
            energy_source,
            lighting_type
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
    },
    [token]
  );

  return { postCapitalProjectInputs };
};

export default useCapitalProjectInputs;
