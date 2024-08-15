import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useState, useEffect } from "react";

// URLs de los endpoints
const URL_ACTIVITY = "/activity";
const URL_EXCLUSIONS = "/exclusions";
const URL_SECTOR = "/sector";
const URL_PROJECT_TYPE = "/projectTypes";
const URL_LOCATIONS = "/locations"; 
const URL_LAND_USES = "/land-uses"; 
const URL_SOIL_TYPES = "/soil-types"; 
const URL_TYPE_CATEGORIES = "/type-categories";
const URL_AREAS_INTEREST = "/areas-of-interest"

const usePreload = () => {
  const { token } = useAuth();

  const [sectorData, setSector] = useState([]);
  const [mainActivityData, setMainActivity] = useState([]);
  const [exclusionsData, setExclusions] = useState([]);
  const [projectTypeData, setProjectType] = useState([]);
  const [locationsData, setLocations] = useState([]); 
  const [landUsesData, setLandUses] = useState([]); 
  const [soilTypesData, setSoilTypes] = useState([]); 
  const [typeCategoriesData, setTypeCategories] = useState([]); 
  const [areaInterestData, setAreaInterest] = useState([]);

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
    readData(URL_LOCATIONS, setLocations); 
    readData(URL_LAND_USES, setLandUses); 
    readData(URL_SOIL_TYPES, setSoilTypes); 
    readData(URL_TYPE_CATEGORIES, setTypeCategories); 
    readData(URL_AREAS_INTEREST,setAreaInterest)
  }, [token]); 
  return {
    mainActivityData,
    exclusionsData,
    sectorData,
    projectTypeData,
    locationsData, 
    landUsesData, 
    soilTypesData,
    typeCategoriesData,
    areaInterestData 
  };
};

export default usePreload;
