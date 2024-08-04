import PropTypes from "prop-types";

const SelectOption = ({ data, value, title, onChange }) => {
  return (
    <div className="lista-opciones">
      <label>{title}</label>
      <select value={value} onChange={onChange}>
        <option value="" disabled hidden>
          {title}
        </option>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectOption.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired, 
  children: PropTypes.string,
};
export default SelectOption;
