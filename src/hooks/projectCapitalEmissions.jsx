import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js"; // Ajusta la ruta si es necesario
import { useCallback } from "react";

const useProjectCapitalEmissions = () => {
  const { token } = useAuth();
  const URL_PROJECT_CAPITAL_EMISSIONS = "/capital-emissions";

  // Función asíncrona para crear un nuevo registro de emisiones de capital del proyecto
  const postProjectCapitalEmissions = useCallback(
    async (
      capital_project_id,
      equipment_emissions,
      equipment_details,
      carbon_footprint,
      wastewater_disposal,
      treatment_required,
      hazardous_waste_generation,
      quantity_measured,
      respel_registration,
      hazardous_waste_management,
      ordinary_waste_management
    ) => {
      console.log((
        capital_project_id,
        equipment_emissions,
        equipment_details,
        carbon_footprint,
        wastewater_disposal,
        treatment_required,
        hazardous_waste_generation,
        quantity_measured,
        respel_registration,
        hazardous_waste_management,
        ordinary_waste_management
      ))
      try {
        const res = await apiClient.post(
          URL_PROJECT_CAPITAL_EMISSIONS,
          {
            capital_project_id,
            equipment_emissions,
            equipment_details,
            carbon_footprint,
            wastewater_disposal,
            treatment_required,
            hazardous_waste_generation,
            quantity_measured,
            respel_registration,
            hazardous_waste_management,
            ordinary_waste_management
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

  return { postProjectCapitalEmissions };
};

export default useProjectCapitalEmissions;
