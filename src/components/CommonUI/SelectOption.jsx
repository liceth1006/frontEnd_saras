import PropTypes from "prop-types";

const SelectOption = ({ data = [], value = '', title, onChange,placeholder }) => {
  return (
    <div className=" px-5">
      <div className="relative bg-inherit">
      <label className="text-sm font-medium text-gray-900 block mb-2">
          {title}
        </label>
        <select
          value={value}
          id={title}
          onChange={onChange}
          className="bg-background-secondary  h-12 w-full rounded-lg  ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none"
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {data.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

SelectOption.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SelectOption;
