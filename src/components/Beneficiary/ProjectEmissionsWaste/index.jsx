import Table from "../../../components/Table";
import PropTypes from "prop-types";
import SelectOptionTable from "../../CommonUI/SelectOptionTable";

const ProjectEmissionsWaste = ({ formData, setFormData }) => {
  const questions = [
    { id: "affected_by_natural_events", question: "¿Se ha visto afectado por eventos o emergencias naturales?" },
    { id: "generates_air_emissions", question: "¿Utiliza equipos que generen emisiones a la atmósfera?" },
    { id: "measures_carbon_footprint", question: "¿Mide la huella de carbono del proyecto?" },
    { id: "has_gei_reduction_measures", question: "¿Tiene medidas de reducción de emisiones de GEI?" },
    { id: "considers_climate_change_adaptation", question: "¿Se consideran medidas de adaptación al cambio climático?" },
    { id: "generates_wastewater", question: "¿Se generan aguas residuales?" },
    { id: "measures_water_footprint", question: "¿Mide su huella hídrica?" },
    { id: "generates_hazardous_hospital_waste", question: "¿Se generan residuos peligrosos u hospitalarios?" },
    { id: "generates_ordinary_demolition_waste", question: "¿Se generan residuos ordinarios y/o de demolición?" },
    { id: "considers_historical_contamination", question: "¿Se tiene en cuenta la contaminación histórica de la zona?" },
    { id: "considers_resource_efficiency_indicators", question: "¿Considera indicadores de eficiencia en el uso de recursos o ahorros?" },
  ];

  const handleSelectChange = (id) => (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const columns = [
    { header: "Pregunta", accessor: "question" },
    { header: "", accessor: "answer" },
  ];

  const data = questions.map((q) => ({
    ...q,
    answer: (
      <SelectOptionTable
        value={formData[q.id] || ""}
        onChange={handleSelectChange(q.id)}
        data={[
          { id: "Yes", name: "Sí" },
          { id: "No", name: "No" },
        ]}
      />
    ),
  }));

  return (
    <div className="container mx-auto">
      <Table
        columns={columns}
        data={data}
        consulta="Preguntas de Gestión Ambiental y Social"
      />
    </div>
  );
};

ProjectEmissionsWaste.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default ProjectEmissionsWaste;
