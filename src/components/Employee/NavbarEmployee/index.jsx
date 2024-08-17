import Navbar from "../../Navbar";

const NavbarEmployee= () => {


  const navbarItems = [
    {
      name: "Proyectos",
     icon:  "fa-solid fa-list-check"
    },
    {
      name: "Formulario",
     icon:  "fa-solid fa-list-check"
    },
  ]
  return (
   <>
   <Navbar items={navbarItems} path="employee"></Navbar>
   </>
  );
};

export default NavbarEmployee;
