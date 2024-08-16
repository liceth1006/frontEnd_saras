import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js"; // Ajusta la ruta si es necesario
import { useCallback } from "react";

const usePermits = () => {
  const { token } = useAuth();
  const URL_PERMITS = "/permit";

  // Función asíncrona para crear un nuevo permiso
  const postPermit = useCallback(
    async (
      capital_project_id,
      perm_id,
      status,
      resolution_number,
      resolution_year,
      issuing_entity
    ) => {
      try {
        const res = await apiClient.post(
          URL_PERMITS,
          {
            capital_project_id,
            perm_id,
            status,
            resolution_number,
            resolution_year,
            issuing_entity
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

  // Función asíncrona para leer todos los permisos
  const fetchPermits = useCallback(async () => {
    try {
      const res = await apiClient.get(URL_PERMITS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
  }, [token]);

  // Función asíncrona para leer un permiso específico por ID
  const fetchPermitById = useCallback(
    async (id) => {
      try {
        const res = await apiClient.get(`${URL_PERMITS}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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

  return { postPermit, fetchPermits, fetchPermitById };
};

export default usePermits;
