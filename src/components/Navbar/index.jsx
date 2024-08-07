import Profile from "../Profile";
import MenuIcon from "./IconHamburger/MenuIcon";
import CloseIcon from "./IconHamburger/CloseIcon";
import Logo from "../CommonUI/Logo";
import NavItem from "./NavItem";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="h-full px-3 py-4 mb-6">
            <Logo title="SARAS" />
            <Profile />
            <NavItem />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
