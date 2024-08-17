import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useBeneficiaryInfConnection = () => {
  const { token } = useAuth();
  const URL_BENEFICIARY = "beneficiary/";
  const URL_BENEFICIARY_INFO = "/beneficiaryInformation";
  const URL_BENEFICIARY_ALL = "/getBeneficiaryAll";
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
        Tipo_Credito: item.Tipo_Credito,
        company_name: item.company_name,
        sector_name: item.sector_name,
        acti_name: item.acti_name,
        Categoria: item.Categoria,
      }));
    } catch (error) {
      console.error("Error al obtener la información del beneficiario:", error);
      return [];
    }
  }, [URL_BENEFICIARY, token]);

  const readBeneficiaryInfAll = useCallback(async () => {
 

    try {
      // Realiza la solicitud GET utilizando apiClient
      const { data } = await apiClient.get(`${URL_BENEFICIARY_ALL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Mapea los datos recibidos
      return data.map((item) => ({
        Tipo_Credito: item.Tipo_Credito,
        company_name: item.company_name,
        sector_name: item.sector_name,
        acti_name: item.acti_name,
        Categoria: item.Categoria,
      }));
    } catch (error) {
      console.error("Error al obtener la información del beneficiario:", error);
      return [];
    }
  }, [URL_BENEFICIARY_ALL, token]);

  const postBeneficiaryInf = async (
    main_activity_id,
    hasExclusion,
    exc_id,
    company_name,
    company_description,
    resources,
    sector_id,
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
    readBeneficiaryInfAll
  };
};

export default useBeneficiaryInfConnection;
