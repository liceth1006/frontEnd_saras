import { useState } from 'react';
import apiClient from './apiClient.js';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  const login = async (use_mail, use_password) => {
    try {
      const res = await apiClient.post("/login", {
        use_mail: use_mail, 
        use_password: use_password,
      });
      setToken(res.data.token);
      setExpiresIn(res.data.expiresIn);
      console.log(res);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const register = async () =>{

  }

  return {
    login,
    register,
    token,
    expiresIn,
  };
};

export default useAuth;
