import { useState } from "react";
import apiClient from "./apiClient.js";

const useAuth = () => {
  const [token, setToken] = useState("");
  const [expiresIn, setExpiresIn] = useState("");

  const login = async (use_mail, use_password) => {
    try {
      const res = await apiClient.post("/login", {
        use_mail: use_mail,
        use_password: use_password,
      });
      setExpiresIn(res.data.expiresIn);
      setToken(res.data.token);
      sessionStorage.setItem("user", "😰");
      sessionStorage.setItem("id", res.data.userId);

      setTime();
      return res.data;
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
  const register = async (
    per_name,
    per_lastname,
    doc_typ_id,
    per_document,
    per_expedition,
    per_birthdate,
    use_role,
    use_mail,
    use_password
  ) => {
    try {
      const res = await apiClient.post("/register", {
        per_name: per_name,
        per_lastname: per_lastname,
        doc_typ_id: doc_typ_id,
        per_document: per_document,
        per_expedition: per_expedition,
        per_birthdate: per_birthdate,
        use_role: use_role,
        use_mail: use_mail,
        use_password: use_password,
      });
      return res.data;
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
  // Función para configurar un temporizador de refresco del token
  const setTime = () => {
    if (!expiresIn) {
      return;
    }
    let tiempo = parseInt(expiresIn);
    console.log(tiempo);
    setTimeout(() => {
      console.log("se refresco");
      console.log("token en time fff", tiempo);
      refreshToken();
    }, tiempo * 1000 - 6000);
  };
  // Función para refrescar el token
  const refreshToken = async () => {
    try {
      const res = await apiClient.get("/refresh");
      setToken(res.data.token);
      setExpiresIn(res.data.expiresIn);
      setTime();
    } catch (error) {
      console.error(error);
      console.log("No ingreso 🤦‍♀️🤦‍♀️");
    }
  };
  // Función para restablecer el estado del almacén
  const resetStore = () => {
    setToken(null);
    setExpiresIn(null);
  };

  const logout = async () => {
    try {
      await apiClient.get("/logout");
    } catch (error) {
      console.error("Error en logout:", error);
    } finally {
      resetStore();
      sessionStorage.removeItem("user");
      window.location.href = "/";
    }
  };

  return {
    login,
    register,
    logout,
    setToken,
    token
  };
};

export default useAuth;
