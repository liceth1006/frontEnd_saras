import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from 'react';

const useBeneficiaryInfConnection = () => {
  const { token } = useAuth();
  const URL_BENEFICIARY_INFO = "beneficiary/";

  // Función asíncrona para leer la información del beneficiario
  const readBeneficiaryInf = useCallback(async () => {
    const userId = sessionStorage.getItem("id");

    if (!userId) {
      console.error("No se encontró userId en sessionStorage.");
      return [];
    }

    try {
      // Realiza la solicitud GET utilizando apiClient
      const { data } = await apiClient.get(`${URL_BENEFICIARY_INFO}${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Mapea los datos recibidos
      return data.map((item) => ({
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
  }, [URL_BENEFICIARY_INFO, token]);

  return {
    readBeneficiaryInf,
  };
};

export default useBeneficiaryInfConnection;
