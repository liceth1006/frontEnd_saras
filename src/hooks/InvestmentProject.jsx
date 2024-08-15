import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";

const useInvestmentProject = () => {
  const { token } = useAuth();
  const URL_INVESTMENT_PROJECTS = "/investment-projects"; 

  const postInvestmentProject = async (
    bene_info_id,
    proj_description,
    phase,
    total_time,
    total_project_value,
    location_id,
    type_category_id,
    soil_type_id,
    land_use_id,
    estimated_execution_time,
    area_or_length,
    consultation_procedure,
    public_access_studies
  ) => {
    try {
      const res = await apiClient.post(
        URL_INVESTMENT_PROJECTS,
        {
          bene_info_id: bene_info_id,
          proj_description: proj_description,
          phase: phase,
          total_time: total_time,
          total_project_value: total_project_value,
          location_id: location_id,
          type_category_id: type_category_id,
          soil_type_id: soil_type_id,
          land_use_id: land_use_id,
          estimated_execution_time: estimated_execution_time,
          area_or_length: area_or_length,
          consultation_procedure: consultation_procedure,
          public_access_studies: public_access_studies
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

  return {
    postInvestmentProject,
  };
};

export default useInvestmentProject;
