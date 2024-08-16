import Navbar from "../../Navbar";

const NavbarBeneficiary = () => {


  const navbarItems = [
    {
      name: "Mis proyectos",
     icon:  "fa-solid fa-list-check"
    },
    {
      name: "Formulario inversión",
     icon:  "fa-solid fa-file-pen"
    },
    {
      name: "Formulario Capital de Trabajo",
     icon:  "fa-solid fa-file-pen"
    },
    {
      name: "Instructivo",
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
