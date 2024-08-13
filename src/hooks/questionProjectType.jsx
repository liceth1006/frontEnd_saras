import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useCallback } from "react";

const useQuestionProjectTypeConnection = () => {
  const { token } = useAuth();
  const URL_QUESTION_PROJECT = "/beneficiaryDetails";

  const getQuestionProjectTypeDetails = useCallback(async(bene_info_id)=>{
   
    try {
      // Realiza la solicitud POST utilizando apiClient
      const res = await apiClient.post(
        URL_QUESTION_PROJECT,
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
  },[URL_QUESTION_PROJECT, token])

return {
  getQuestionProjectTypeDetails,
 
};
};

export default useQuestionProjectTypeConnection;
