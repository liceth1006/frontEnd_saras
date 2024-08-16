import PropTypes from "prop-types";
import IconSearch from "./IconSearch";

import { useRef } from "react";

const Search = ({ type, placeholder,setConsulta }) => {
  const cajaConsulta = useRef(null)

  const handleIconClick = () => {
    setConsulta(cajaConsulta.current.value);
    
  };
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        ref={cajaConsulta}
        className="input shadow-lg border-2 focus:border-2 border-blue-950 px-5 py-3 rounded-xl w-80 transition-all focus:w-96 outline-none"
        name="search"
        type={type}
        onChange={handleIconClick}
      />
      <IconSearch  handleIconClick={handleIconClick}
      />
    </div>
  );
};

Search.propTypes ={
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setConsulta: PropTypes.func.isRequired
}

export default Search;
