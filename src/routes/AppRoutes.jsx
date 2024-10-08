import {  Route, Routes } from "react-router-dom";
//layout
import AuthLayout from '../components/layouts/AuthLayout.jsx'
import BeneficiaryLayout from '../components/layouts/BeneficiaryLayout.jsx'
import EmployeeLayout from '../components/layouts/EmployeeLayout.jsx'

//paginas 
import Home from '../pages/Home'
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
// import Employee from '../pages/Employee/Employee.jsx'

function AppRoutes() {
  return (
   
      <Routes>
       <Route path="/" element={<AuthLayout><Home /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/beneficiary/:itemName" element={<BeneficiaryLayout />} />
      {/* <Route path="/employee" element={<EmployeeLayout><Employee/></EmployeeLayout>} /> */}
      <Route path="/employee/:itemName" element={<EmployeeLayout></EmployeeLayout>} /> 
      </Routes>

  );
}

export default AppRoutes;
