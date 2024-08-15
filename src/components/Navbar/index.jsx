import Profile from "../Profile";
import PropTypes from "prop-types";
import MenuIcon from "./IconHamburger/MenuIcon";
import CloseIcon from "./IconHamburger/CloseIcon";
import Logo from "../CommonUI/Logo";
import NavItem from "./NavItem";
import { useState } from "react";
import useProfile from "../../hooks/profileConnection.jsx";

const Navbar = ({ items, path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { profileData, loading } = useProfile();

  if (loading) {
    return <div>Cargando...</div>;
  }

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative z-50">
        <button
          onClick={handleMenu}
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-background-secondary transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 overflow-y-auto`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4  ">
          <div className="h-full px-3 py-4 mb-6 ">
            <Logo title="SARAS" />

            <Profile
              image="imagen"
              name={profileData.per_name}
              lastname={profileData.per_lastname}
              email={profileData.use_mail}
            />
            <div className="pb-5"></div>

            <NavItem items={items} setIsOpen={setIsOpen} path={path} />
          </div>
        </div>
      </aside>
    </>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default Navbar;
