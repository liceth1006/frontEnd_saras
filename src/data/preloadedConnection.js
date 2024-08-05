import apiClient from "./apiClient.js";

const URL_DOCUMENT_TYPE = "/documentTypes";

const readDocumentType = async () => {
  try {
    const res = await apiClient.get(URL_DOCUMENT_TYPE);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const preloadedConnection = {
  readDocumentType,
};
