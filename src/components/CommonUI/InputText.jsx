import PropTypes from "prop-types";

const InputText = ({ title, type = "text", children, value, onChange }) => {
  return (
    <div className="bg-white p-5">
      <div className="relative bg-inherit">
        <input
          type={type}
          id={title}
          title={title}
          value={value}
          onChange={onChange} 
          className="peer bg-transparent h-12 w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          placeholder={title}
        />
        <label
          htmlFor={title}
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-400 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          {children}
        </label>
      </div>
    </div>
  );
};

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired, 
  children: PropTypes.string,
};

export default InputText;
