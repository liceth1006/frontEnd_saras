import Navbar from "../../Navbar";

const NavbarBeneficiary = () => {


  const navbarItems = [
    {
      name: "Mis proyectos",
     icon:  "fa-solid fa-list-check"
    },
    {
      name: "formulario inversión",
     icon:  "fa-solid fa-file-pen"
    },
    {
      name: "Información del proyecto o inversión",
     icon:  "fa-solid fa-file-pen"
    },
    {
      name: "Gestión ambiental y social",
     icon:  "fa-solid fa-file-pen"
    },
    {
      name: "Capital De Trabajo",
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
