import PropTypes from "prop-types";

const SelectOption = ({ data = [], value, title, onChange }) => {
  return (
    <div className="bg-white p-5">
      <div className="relative bg-inherit">
        <label
          htmlFor={title}
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-400 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          {title}
        </label>
        <select
          value={value}
          id={title}
          onChange={onChange}
          className="peer bg-transparent h-12 w-full rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
        >
          <option value="" disabled hidden>
            seleccione una opción
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectOption;
