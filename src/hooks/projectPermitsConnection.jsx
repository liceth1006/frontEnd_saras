import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useProjectPermitsConnection = () => {
  const { token } = useAuth();
  const URL_PROJECT_PERMITS = "/project-permits";

  // Función asíncrona para crear un nuevo permiso de proyecto
  const postProjectPermits = async (
    project_investment_id,
    requires_environmental_diagnosis,
    requires_environmental_license,
    requires_other_permits
  ) => {
    try {
      const res = await apiClient.post(
        URL_PROJECT_PERMITS,
        {
          project_investment_id,
          requires_environmental_diagnosis,
          requires_environmental_license,
          requires_other_permits
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

  // Función asíncrona para obtener los detalles de un permiso de proyecto por ID
  const getProjectPermitsDetails = useCallback(
    async (id) => {
      try {
        // Realiza la solicitud GET utilizando apiClient
        const res = await apiClient.get(
          `${URL_PROJECT_PERMITS}/${id}`,
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
    postProjectPermits,
    getProjectPermitsDetails,
  };
};

export default useProjectPermitsConnection;
