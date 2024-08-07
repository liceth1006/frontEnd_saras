import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LogoIcon from "../../../assets/images/logo.svg";

const Logo = ({ title, slogan }) => {
  return (
    <Link to="/" className="flex items-center px-8 ">
      <img src={LogoIcon} alt="Logo Saras" className="w-10 inline" />
      <div className="flex flex-col">
        <span className=" ml-2  font-semibold text-lg sm:text-xl block ">
          {title}
        </span>
        <span className=" ml-2  font-semibold text-lg sm:text-xl  ">
          {slogan}
        </span>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
};

export default Logo;
