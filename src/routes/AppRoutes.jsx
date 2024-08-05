import {  Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Beneficiary from '../pages/Beneficiary.jsx'
function AppRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="//register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/beneficiary" element={<Beneficiary/>}></Route>
        <Route path="/beneficiary/:categoryId" element={<Beneficiary/>}></Route>
      </Routes>

  );
}

export default AppRoutes;
