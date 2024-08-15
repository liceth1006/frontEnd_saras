import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useProjectInputsConnection = () => {
  const { token } = useAuth();
  const URL_PROJECT_INPUTS = "/project-inputs";

  // Función asíncrona para crear un nuevo registro de entradas del proyecto
  const postProjectInputs = async (
    project_investment_id,
    water_source_for_project,
    water_source_for_workers,
    efficient_water_use_measures,
    uses_chemical_or_hazardous_products,
    uses_pesticides,
    requires_materials_from_quarries,
    type_of_lighting,
    energy_source,
    efficient_energy_use_measures,
    efficient_use_of_other_resources,
    integrates_clean_production_principles
  ) => {
    try {
      const res = await apiClient.post(
        URL_PROJECT_INPUTS,
        {
          project_investment_id,
          water_source_for_project,
          water_source_for_workers,
          efficient_water_use_measures,
          uses_chemical_or_hazardous_products,
          uses_pesticides,
          requires_materials_from_quarries,
          type_of_lighting,
          energy_source,
          efficient_energy_use_measures,
          efficient_use_of_other_resources,
          integrates_clean_production_principles
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

  // Función asíncrona para obtener los detalles de un registro de entradas del proyecto por ID
  const getProjectInputDetails = useCallback(
    async (id) => {
      try {
        // Realiza la solicitud GET utilizando apiClient
        const res = await apiClient.get(
          `${URL_PROJECT_INPUTS}/${id}`,
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
    postProjectInputs,
    getProjectInputDetails,
  };
};

export default useProjectInputsConnection;
