import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext.jsx";
const NavItem = ({ items, path,setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const current = decodeURIComponent(location.pathname.split('/')[2]);
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout(); 
  };
  const handleClick = (itemName) => {
    navigate(`/${path}/${encodeURIComponent(itemName)}`);
    setIsOpen(false)
  };

  return (
    <>
      <ul className="space-y-2 font-medium">
        {items.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              handleClick(item.name);
            }}
            className={`flex items-center p-2 text-zinc-200  hover:text-gray-900 rounded-lg  hover:bg-gray-100  group ${
              current === item.name ? "text-blue-950 font-bold bg-background-navbar " : ""
            }`}
          >
            <i className={item.icon} />
            <span className="ms-3">{item.name}</span>
          </li>
        ))}
        <li
         className={`flex items-center p-2 text-zinc-200 rounded-lg hover:text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
          current === "salir" ? "text-sky-950 font-bold bg-background-navbar" : ""
        }`}
        >
        <button onClick={handleLogout}> <i className="fa-solid fa-arrow-right-to-bracket" />
        <span className="ms-3">Salir</span>
        </button>
        </li>
      </ul>

    </>
  );
};
NavItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
  setIsOpen: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};
export default NavItem;
