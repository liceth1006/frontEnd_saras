import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";


const useCommunityHealthSafetyConnection = () => {
  const { token } = useAuth();
  const URL_COMMUNITY_HEALTH_SAFETY = "/community-health-safety";


  // Función asíncrona para crear un nuevo registro de salud y seguridad comunitaria
  const postCommunityHealthSafety = async (
    project_investment_id,
      avoids_chemicals_pesticides,
      avoids_air_contaminants_dust,
      avoids_dismantling_old_infrastructure,
      avoids_vehicle_movement,
      avoids_unqualified_security,
      trained_security_personnel,
      avoids_large_water_use,
      has_complaint_mechanism,
      avoids_unpleasant_odors,
      avoids_excessive_noise,
      has_community_engagement_mechanisms,
      takes_covid19_precautions
  ) => {
    try {
      const response = await apiClient.post(
        URL_COMMUNITY_HEALTH_SAFETY,
        {
          project_investment_id,
          avoids_chemicals_pesticides,
          avoids_air_contaminants_dust,
          avoids_dismantling_old_infrastructure,
          avoids_vehicle_movement,
          avoids_unqualified_security,
          trained_security_personnel,
          avoids_large_water_use,
          has_complaint_mechanism,
          avoids_unpleasant_odors,
          avoids_excessive_noise,
          has_community_engagement_mechanisms,
          takes_covid19_precautions
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  };

  // Función asíncrona para obtener los detalles de un registro de salud y seguridad comunitaria por ID
  // const getCommunityHealthSafetyDetails = useCallback(
  //   async (id) => {
  //     try {
  //       const response = await apiClient.get(
  //         `${URL_COMMUNITY_HEALTH_SAFETY}/${id}`,
  //         getAuthHeaders()
  //       );
  //       return response.data;
  //     } catch (error) {
  //       handleApiError(error);
  //     }
  //   },
  //   [token]
  // );

  // Manejo de errores de API
  const handleApiError = (error) => {
    if (error.response) {
      console.error("Error en la respuesta:", error.response.data);
      throw error.response.data; 
    } else if (error.request) {
      console.error("Error en la solicitud:", error.request);
    } else {
      console.error("Error:", error.message);
    }
  };

  return {
    postCommunityHealthSafety,
  };
};

export default useCommunityHealthSafetyConnection;
