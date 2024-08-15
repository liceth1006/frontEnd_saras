import Table from "../../../components/Table";
import PropTypes from "prop-types";
import SelectOptionTable from "../../CommonUI/SelectOptionTable";

const FormProjectInputs = ({ formData, setFormData }) => {
  const questions = [
    {
      id: "water_source_for_project",
      question: "¿De dónde obtiene el agua para el proyecto/inversión?",
    },
    {
      id: "water_source_for_workers",
      question: "¿De dónde obtiene el agua para el consumo de los trabajadores?",
    },
    {
      id: "efficient_water_use_measures",
      question: "¿Son aplicadas medidas para el uso eficiente del agua?",
    },
    {
      id: "uses_chemical_or_hazardous_products",
      question: "¿Requiere de la utilización de productos químicos o peligrosos?",
    },
    {
      id: "uses_pesticides",
      question: "¿Se utilizan plaguicidas?",
    },
    {
      id: "requires_materials_from_quarries",
      question: "¿Requiere de la utilización de materiales extraídos de canteras?",
    },
    {
      id: "type_of_lighting",
      question: "¿Qué tipo de iluminación utiliza?",
    },
    {
      id: "energy_source",
      question: "¿Cómo obtiene la energía para sus actividades?",
    },
    {
      id: "efficient_energy_use_measures",
      question: "¿Son aplicadas medidas para el uso eficiente de la energía?",
    },
    {
      id: "efficient_use_of_other_resources",
      question: "¿Son aplicadas medidas para el uso eficiente de otros recursos?",
    },
    {
      id: "integrates_clean_production_principles",
      question: "¿Integra principios de producción limpia en sus procesos?",
    },
  ];

  const waterSourceOptions = [
    { id: "acueducto", name: "Acueducto" },
    { id: "compra_tercero", name: "La compra a un tercero" },
    { id: "autoprovision", name: "Se autoprovee de la cuenca hidrográfica" },
    { id: "no_requiere", name: "No requiere" },
  ];

  const energySourceOptions = [
    { id: "energy_company", name: "Empresa de energía" },
    { id: "coal", name: "Autogeneración con carbón" },
    { id: "gasoline_diesel", name: "Autogeneración con gasolina/diesel" },
    { id: "gas", name: "Autogeneración con gas" },
    { id: "renewable_sources", name: "Autogeneración con fuentes renovables" },
    { id: "hydroelectric", name: "Autogeneración con energía Hidroeléctrica" },
    { id: "solar", name: "Autogeneración con energía Solar" },
    { id: "wind", name: "Autogeneración con energía Eólica" },
    { id: "biomass", name: "Autogeneración con energía Biomasa" },
    { id: "biogas", name: "Autogeneración con energía Biogás" },
    { id: "geothermal", name: "Autogeneración con energía Geotérmica" },
    { id: "tidal", name: "Autogeneración con energía Mareomotríz" },
    { id: "other", name: "Otra" },
  ];

  const yesNoOptions = [
    { id: "Yes", name: "Sí" },
    { id: "No", name: "No" },
  ];

  const handleSelectChange = (id) => (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const columns = [
    { header: "Pregunta", accessor: "question" },
    { header: "", accessor: "answer" },
  ];

  const data = questions.map((q) => {
    let options;
    switch (q.id) {
      case "water_source_for_project":
      case "water_source_for_workers":
        options = waterSourceOptions;
        break;
      case "energy_source":
        options = energySourceOptions;
        break;
      default:
        options = yesNoOptions;
    }

    return {
      ...q,
      answer: (
        <SelectOptionTable
          key={q.id}
          title=""
          value={formData[q.id] || ""}
          onChange={handleSelectChange(q.id)}
          data={options}
        />
      ),
    };
  });

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

FormProjectInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormProjectInputs;
