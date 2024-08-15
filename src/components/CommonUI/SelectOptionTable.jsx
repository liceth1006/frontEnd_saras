import PropTypes from 'prop-types';

const SelectOptionTable = ({ title, value, onChange, data }) => (
  <div className="select-option ">
    {title && <label className="block text-sm font-medium text-gray-700">{title}</label>}
    <select
      value={value}
      onChange={onChange}
     className="text-center bg-background-secondary h-10 w-full rounded-lg placeholder-transparent ring-2  ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
    >
      <option value="" disabled hidden>
            seleccione
          </option>
      {data.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

SelectOptionTable.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectOptionTable;
