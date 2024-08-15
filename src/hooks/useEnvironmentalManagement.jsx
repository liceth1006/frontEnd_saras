import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useEnvironmentalManagementConnection = () => {
  const { token } = useAuth();
  const URL_ENVIRONMENTAL_MANAGEMENT = "/environmental-management";

  // Función asíncrona para crear una nueva gestión ambiental
  const postEnvironmentalManagement = async (
    investment_project_id,
    environmental_management_department,
    responsible_staff,
    policies_guidelines,
    iso_certifications,
    legal_matrix,
    identified_impacts,
    complaints_mechanism,
    complies_with_regulations,
    environmental_supervision,
    public_communication,
    emergency_situations,
    sanctioned,
    environmental_liabilities,
    complaints
  ) => {
    console.log( investment_project_id,
      environmental_management_department,
      responsible_staff,
      policies_guidelines,
      iso_certifications,
      legal_matrix,
      identified_impacts,
      complaints_mechanism,
      complies_with_regulations,
      environmental_supervision,
      public_communication,
      emergency_situations,
      sanctioned,
      environmental_liabilities,
      complaints)
    try {
      const res = await apiClient.post(
        URL_ENVIRONMENTAL_MANAGEMENT,
        {
          investment_project_id: investment_project_id,
          environmental_management_department: environmental_management_department,
          responsible_staff: responsible_staff,
          policies_guidelines: policies_guidelines,
          iso_certifications: iso_certifications,
          legal_matrix: legal_matrix,
          identified_impacts: identified_impacts,
          complaints_mechanism: complaints_mechanism,
          complies_with_regulations: complies_with_regulations,
          environmental_supervision: environmental_supervision,
          public_communication: public_communication,
          emergency_situations: emergency_situations,
          sanctioned: sanctioned,
          environmental_liabilities:environmental_liabilities,
          complaints:complaints
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

  // Función asíncrona para obtener los detalles de una gestión ambiental por ID
  const getEnvironmentalManagementDetails = useCallback(
    async (id) => {
      try {
        // Realiza la solicitud GET utilizando apiClient
        const res = await apiClient.get(
          `${URL_ENVIRONMENTAL_MANAGEMENT}/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return res.data; // Asumiendo que quieres devolver los datos de la respuesta
      } catch (error) {
        if (error.response) {
          console.error("Error en la respuesta:", error);
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
    postEnvironmentalManagement,
    getEnvironmentalManagementDetails,
  };
};

export default useEnvironmentalManagementConnection;
