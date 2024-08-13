import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useBeneficiaryInfConnection = () => {
  const { token } = useAuth();
  const URL_BENEFICIARY = "beneficiary/";
  const URL_BENEFICIARY_INFO = "/beneficiaryInformation";
  // Función asíncrona para leer la información del beneficiario
  const readBeneficiaryInf = useCallback(async () => {
    const userId = sessionStorage.getItem("id");
    if (!userId) {
      console.error("No se encontró userId en sessionStorage.");
      return [];
    }

    try {
      // Realiza la solicitud GET utilizando apiClient
      const { data } = await apiClient.get(`${URL_BENEFICIARY}${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Mapea los datos recibidos
      return data.map((item) => ({
        bene_info_id: item.bene_info_id,
        type_name: item.type_name,
        company_name: item.company_name,
        sector_name: item.sector_name,
        acti_name: item.acti_name,
        // exc_name: item.exc_name,
      }));
    } catch (error) {
      console.error("Error al obtener la información del beneficiario:", error);
      return [];
    }
  }, [URL_BENEFICIARY, token]);

  const postBeneficiaryInf = async (
    main_activity_id,
    hasExclusion,
    exc_id,
    company_name,
    company_description,
    resources,
    sector_id,
    project_types_id,
    credit_value
  ) => {
    const userId = sessionStorage.getItem("id");
   
    try {
      // Realiza la solicitud POST utilizando apiClient
      const res = await apiClient.post(
        URL_BENEFICIARY_INFO,
        {
          use_id: userId, // ID del usuario, se usa aquí
          main_activity_id: main_activity_id,
          hasExclusion: hasExclusion,
          exc_id: exc_id,
          company_name: company_name,
          company_description: company_description,
          resources: resources,
          sector_id: sector_id,
          project_types_id: project_types_id,
          credit_value:credit_value
        },
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
  };

  return {
    readBeneficiaryInf,
    postBeneficiaryInf,
  };
};

export default useBeneficiaryInfConnection;
