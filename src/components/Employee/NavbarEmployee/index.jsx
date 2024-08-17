import Navbar from "../../Navbar";

const NavbarEmployee= () => {


  const navbarItems = [
    {
      name: "Formulario FARAS",
     icon:  "fa-solid fa-list-check"
    },
  ]
  return (
   <>
   <Navbar items={navbarItems} path="beneficiary"></Navbar>
   </>
  );
};

export default NavbarEmployee;
