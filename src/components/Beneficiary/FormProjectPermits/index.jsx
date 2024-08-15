import Table from "../../../components/Table";
import PropTypes from "prop-types";
import SelectOptionTable from "../../CommonUI/SelectOptionTable";

const FormProjectPermits = ({ formData, setFormData }) => {
  const questions = [
    {
      id: "requires_environmental_diagnosis",
      question: "¿El proyecto / inversión requiere de Diagnóstico Ambiental de Alternativas?",
    },
    {
      id: "requires_environmental_license",
      question: " ¿El proyecto / inversión requiere de Licencia Ambiental?",
    },
    {
      id: "requires_other_permits",
      question:
        "¿Requiere permisos ambientales, sociales y/o municipales?",
    },
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
        key={q.id}
        title=""
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

FormProjectPermits.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormProjectPermits;
