import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useGenderIssuesConnection = () => {
  const { token } = useAuth();
  const URL_GENDER_ISSUES = "/gender-issues";

  // Función asíncrona para crear un nuevo registro de problemas de género
  const postGenderIssues = async (
    bene_info_id,
    discriminates_gender_benefits,
    sexual_abuse_reports,
    sexual_harassment_reports,
    discrimination_against_women_reports,
    discrimination_orientation_gender_reports,
    sexual_exploitation_reports,
    lacks_gender_equality_policies
  ) => {
    try {
      const res = await apiClient.post(
        URL_GENDER_ISSUES,
        {
          bene_info_id,
          discriminates_gender_benefits,
          sexual_abuse_reports,
          sexual_harassment_reports,
          discrimination_against_women_reports,
          discrimination_orientation_gender_reports,
          sexual_exploitation_reports,
          lacks_gender_equality_policies
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

  // Función asíncrona para obtener los detalles de un registro de problemas de género por ID
  const getGenderIssuesDetails = useCallback(
    async (id) => {
      try {
        // Realiza la solicitud GET utilizando apiClient
        const res = await apiClient.get(
          `${URL_GENDER_ISSUES}/${id}`,
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
    postGenderIssues,
    getGenderIssuesDetails,
  };
};

export default useGenderIssuesConnection;
