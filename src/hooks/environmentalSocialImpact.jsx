import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useEnvironmentalSocialImpactConnection = () => {
  const { token } = useAuth();
  const URL_ENVIRONMENTAL_SOCIAL_IMPACT_ = "/environmental-social-impact";

  // Función asíncrona para crear una nueva gestión de impacto ambiental y social
  const postEnvironmentalSocialImpact = async (
    project_investment_id,
    has_management_plan,
    impacts_on_water_air_soil,
    impacts_on_flora_fauna_landscape,
    impacts_on_social_labour
  ) => {
    try {
      const res = await apiClient.post(
        URL_ENVIRONMENTAL_SOCIAL_IMPACT_,
        {
          project_investment_id,
          has_management_plan,
          impacts_on_water_air_soil,
          impacts_on_flora_fauna_landscape,
          impacts_on_social_labour
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

  // Función asíncrona para obtener los detalles de la gestión de impacto ambiental y social por ID
  const getEnvironmentalSocialImpactDetails = useCallback(
    async (id) => {
      try {
        // Realiza la solicitud GET utilizando apiClient
        const res = await apiClient.get(
          `${URL_ENVIRONMENTAL_SOCIAL_IMPACT_}/${id}`,
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
    postEnvironmentalSocialImpact,
    getEnvironmentalSocialImpactDetails,
  };
};

export default useEnvironmentalSocialImpactConnection;
