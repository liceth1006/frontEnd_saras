import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useState, useEffect } from "react";

const URL_ACTIVITY = "/activity";
const URL_EXCLUSIONS = "/exclusions";
const URL_SECTOR = "/sector";
const URL_PROJECT_TYPE = "/projectTypes";

const usePreload = () => {
  const { token } = useAuth();

  const [sectorData, setSector] = useState([]);
  const [mainActivityData, setMainActivity] = useState([]);
  const [exclusionsData, setExclusions] = useState([]);
  const [projectTypeData, setProjectType] = useState([]);

  const readData = async (url, setData) => {
    if (!token) {
      console.log("Token no disponible");
      return;
    }
    try {
      const res = await apiClient({
        url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    } catch (error) {
      console.log(`Error fetching data from ${url}:`, error);
    }
  };

  useEffect(() => {
    readData(URL_ACTIVITY, setMainActivity);
    readData(URL_EXCLUSIONS, setExclusions);
    readData(URL_SECTOR, setSector);
    readData(URL_PROJECT_TYPE, setProjectType);
  }, [token]); // Añadir dependencias necesarias si cambia en el futuro

  return {
    mainActivityData,
    exclusionsData,
    sectorData,
    projectTypeData
  };
};

export default usePreload;
