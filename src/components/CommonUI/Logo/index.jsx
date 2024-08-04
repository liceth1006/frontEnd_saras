import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center px-8 " >
      <img
        src={LogoIcon}
        alt="Logo Saras"
        className="w-10 inline"
      />
      <div className="flex flex-col">
        <span className=" ml-2  font-semibold text-lg sm:text-xl block ">
          SARAS
        </span>
        <span className=" ml-2  font-semibold text-lg sm:text-xl  ">
        Solución Integral para la Gestión de SARAS
        </span>
      </div>
    </Link>
  );
};



export default Logo;
