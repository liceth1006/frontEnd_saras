import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
const NavItem = ({ items, path,setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname.split("/")[2];

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
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
              current === item.name ? "bg-red-500" : ""
            }`}
          >
            <i className={item.icon} />
            <span className="ms-3">{item.name}</span>
          </li>
        ))}
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
