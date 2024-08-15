import PropTypes from "prop-types";

const InputText = ({ title, type = "text", value, onChange, placeholder }) => {
  return (
    <div className=" px-5">
      <div className="relative bg-inherit">
        <label className="text-sm font-medium text-gray-900 block mb-2">
          {title}
        </label>
        <input
          type={type}
          id={title}
          title={title}
          value={value}
          onChange={onChange}
          className=" bg-background-secondary h-12 w-full rounded-lg   ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
