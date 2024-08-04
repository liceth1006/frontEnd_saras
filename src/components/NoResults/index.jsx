import Face from "../../assets/images/face.svg";
import PropTypes from "prop-types";
const NoResults = ({ consulta }) => {
  return (
    <div className="block pt-10 ">
      <div className="flex justify-center items-center">
        <img className="w-52 text-center" src={Face} />
      </div>
      <h2 className="text-xl ">
        {`Su búsqueda de `}
        <span className="text-2xl font-semibold">{consulta}</span>
        {` no tuvo resultados.`}
      </h2>
    </div>
  );
};
NoResults.propTypes = {
  consulta: PropTypes.string.isRequired,
};

export default NoResults;
