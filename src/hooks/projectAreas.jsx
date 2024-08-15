import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";


const useProjectAreas = () => {
  const { token } = useAuth();
  const URL_PROJECT_AREAS = "/project-areas";

  // Función asíncrona para crear un nuevo registro de entradas del proyecto
  const postProjectAreas = async (
    investment_project_id, area_id
  ) => {
    try {
      console.log(investment_project_id,area_id)
      const res = await apiClient.post(
        URL_PROJECT_AREAS,
        {
          investment_project_id, area_id
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
    postProjectAreas,
   
  };
};

export default useProjectAreas;