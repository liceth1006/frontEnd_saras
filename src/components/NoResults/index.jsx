import PropTypes from "prop-types";
const NoResults = ({ consulta }) => {
  return (
    <div className=" block pt-10  ">
      <div className="flex justify-center items-center">
        <i className="fa-solid fa-face-frown text-3xl"></i>
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
  consulta: PropTypes.string,
};

export default NoResults;
