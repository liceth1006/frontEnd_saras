import { useAuth } from "../contexts/AuthContext.jsx";
import apiClient from "../data/apiClient.js";
import { useState, useEffect } from "react";

const useProfile = () => {
  const { token } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    if (!token) {
      console.log("Token no disponible");
      return;
    }
    try {
      const res = await apiClient({
        url: "profile",
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
     
      setProfileData(res.data);
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [token]);

  return {
    profileData,
    loading,
  };
};

export default useProfile;
