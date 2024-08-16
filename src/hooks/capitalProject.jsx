import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";

const useCapitalProject = () => {
  const { token } = useAuth();
  const URL_CAPITAL_PROJECT = "/capital-project";

  const postCapitalProject = async (bene_info_id) => {
    try {
      const res = await apiClient.post(
        URL_CAPITAL_PROJECT,
        {
          bene_info_id: bene_info_id,
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
    postCapitalProject,
  };
};

export default useCapitalProject;
