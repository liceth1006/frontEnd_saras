import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js"; // Ajusta la ruta si es necesario
import { useCallback } from "react";

const useCreditBeneficiaryEnvironmentalInfo = () => {
  const { token } = useAuth();
  const URL_CREDIT_BENEFICIARY_ENVIRONMENTAL_INFO = "/credit-beneficiary-environmental-info";

  // Función asíncrona para crear un nuevo registro de información ambiental del beneficiario
  const postCreditBeneficiaryEnvironmentalInfo = useCallback(
    async (
      capital_project_id,
      debt_substitution,
      has_environmental_department,
      has_environmental_policies,
      environmental_certifications,
      known_impacts,
      environmental_programs,
      legal_requirements_documented,
      public_communication,
      public_communication_details,
      supervision_activities,
      accident_emergency_management,
      labor_norms_compliance,
      grievance_mechanism,
      environmental_liabilities
    ) => {
      try {
        const res = await apiClient.post(
          URL_CREDIT_BENEFICIARY_ENVIRONMENTAL_INFO,
          {
            capital_project_id,
            debt_substitution,
            has_environmental_department,
            has_environmental_policies,
            environmental_certifications,
            known_impacts,
            environmental_programs,
            legal_requirements_documented,
            public_communication,
            public_communication_details,
            supervision_activities,
            accident_emergency_management,
            labor_norms_compliance,
            grievance_mechanism,
            environmental_liabilities
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

  return { postCreditBeneficiaryEnvironmentalInfo };
};

export default useCreditBeneficiaryEnvironmentalInfo;
