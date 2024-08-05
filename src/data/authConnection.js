import apiClient from './apiClient.js';

const useAuth = () => {


  const login = async (use_mail, use_password) => {
    try {
      const res = await apiClient.post("/login", {
        use_mail: use_mail, 
        use_password: use_password,
      });
     return res.data
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

  const register = async (per_name,per_lastname,doc_typ_id,per_document,per_expedition,per_birthdate,use_role,use_mail,use_password) =>{
    try{
      console.log(per_name,per_lastname,doc_typ_id,per_document,per_expedition,per_birthdate,use_role,use_mail,use_password)
const res = await apiClient.post("/register",{
  per_name:per_name,
  per_lastname:per_lastname,
  doc_typ_id:doc_typ_id,
  per_document:per_document,
  per_expedition:per_expedition,
  per_birthdate:per_birthdate,
  use_role:use_role,
  use_mail:use_mail,
  use_password:use_password

})
console.log(res)
return res.data
    
    }catch(error){
      if (error.response) {
        throw error.response.data;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
}
  }

  return {
    login,
    register,
  };
};

export default useAuth;
