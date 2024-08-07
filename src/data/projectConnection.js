import apiClient from "./apiClient.js";

const URL_PROJECT = "/project";

const readProject = async () => {
  try {
    const res = await apiClient.get(URL_PROJECT);
    const data = res.data.map((item) => ({
      proj_name: item.proj_name,
      proj_description: item.proj_description,
      total_project_value: item.total_project_value,
      estimated_value_financed: item.estimated_value_financed,
    }));
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};


export const projectConnection = {
  readProject,
};
