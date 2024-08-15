import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";


const useProjectEmissionsWasteConnection = () => {
  const { token } = useAuth();
  const URL_PROJECT_EMISSIONS_WASTE = "/project-emissions-waste";

  // Configura los headers para las solicitudes
  const getAuthHeaders = () => ({
    Authorization: `Bearer ${token}`,
  });

  // Función asíncrona para crear un nuevo registro de emisiones y residuos del proyecto
  const postProjectEmissionsWaste = async (
    project_investment_id,
    affected_by_natural_events,
    generates_air_emissions,
    measures_carbon_footprint,
    has_gei_reduction_measures,
    considers_climate_change_adaptation,
    generates_wastewater,
    measures_water_footprint,
    generates_hazardous_hospital_waste,
    generates_ordinary_demolition_waste,
    considers_historical_contamination,
    considers_resource_efficiency_indicators
  ) => {
    console.log(
      project_investment_id,
      affected_by_natural_events,
      generates_air_emissions,
      measures_carbon_footprint,
      has_gei_reduction_measures,
      considers_climate_change_adaptation,
      generates_wastewater,
      measures_water_footprint,
      generates_hazardous_hospital_waste,
      generates_ordinary_demolition_waste,
      considers_historical_contamination,
      considers_resource_efficiency_indicators
    );

    try {
      const res = await apiClient.post(
        URL_PROJECT_EMISSIONS_WASTE,
        {
          project_investment_id,
          affected_by_natural_events,
          generates_air_emissions,
          measures_carbon_footprint,
          has_gei_reduction_measures,
          considers_climate_change_adaptation,
          generates_wastewater,
          measures_water_footprint,
          generates_hazardous_hospital_waste,
          generates_ordinary_demolition_waste,
          considers_historical_contamination,
          considers_resource_efficiency_indicators,
        },
        { headers: getAuthHeaders() }
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



  return {
    postProjectEmissionsWaste,
  
  };
};

export default useProjectEmissionsWasteConnection;
