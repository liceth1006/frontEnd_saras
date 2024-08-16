import PropTypes from "prop-types";

const Button = ({ children,className }) => {
  return (
    <button className={`mt-5 tracking-wide font-semibold  text-white-500 w-full py-4 rounded-lg ${className} transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`} >
    {children}
  </button>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
