import Table from "../../../components/Table";
import PropTypes from "prop-types";
import SelectOptionTable from "../../CommonUI/SelectOptionTable";

const FormGenderIssues = ({ formData, setFormData }) => {
  const questions = [
    {
      id: "discriminates_gender_benefits",
      question: "¿Discrimina los beneficios y remuneraciones de sus colaboradores según el género?",
    },
    {
      id: "sexual_abuse_reports",
      question: "¿Tiene denuncias de abuso sexual por parte de sus trabajadores?",
    },
    {
      id: "sexual_harassment_reports",
      question: "¿Tiene denuncias de acoso sexual por parte de sus trabajadores?",
    },
    {
      id: "discrimination_against_women_reports",
      question: "¿Tiene denuncias de discriminación contra mujeres?",
    },
    {
      id: "discrimination_orientation_gender_reports",
      question: "¿Tiene denuncias de discriminación por la orientación sexual o identidad de género?",
    },
    {
      id: "sexual_exploitation_reports",
      question: "¿Tiene denuncias relacionadas a explotación sexual?",
    },
    {
      id: "lacks_gender_equality_policies",
      question: "¿Carece de prácticas o políticas de igualdad de género?",
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

FormGenderIssues.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormGenderIssues;
