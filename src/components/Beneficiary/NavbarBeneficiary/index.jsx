import Navbar from "../../Navbar";

const NavbarBeneficiary = () => {


  const navbarItems = [
    {
      name: "Dashboard",
      icon:  "fa-solid fa-chart-pie"
    },
    {
      name: "Información del beneficiario",
     icon:  "fa-solid fa-list-check"
    },
    {
      name: "Formulario",
     icon:  "fa-solid fa-file-pen"
    },
    {
      name: "Formularios",
     icon:  "fa-solid fa-file-pen"
    },
    {
      name: "Documentos",
      icon: "fa-solid fa-folder-open",
    },
  ]
  return (
   <>
   <Navbar items={navbarItems} path="beneficiary"></Navbar>
   </>
  );
};

export default NavbarBeneficiary;
