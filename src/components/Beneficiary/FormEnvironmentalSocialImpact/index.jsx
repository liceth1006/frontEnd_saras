import Table from "../../../components/Table";
import PropTypes from "prop-types";
import SelectOptionTable from "../../CommonUI/SelectOptionTable";

const FormEnvironmentalSocialImpact = ({ formData, setFormData }) => {
  const questions = [
    {
      id: "has_management_plan",
      question: " ¿El proyecto / inversión cuenta con un Plan, Programas, o Actividades de Manejo Socio Ambiental?",
    },
    {
      id: "impacts_on_water_air_soil",
      question: " ¿El proyecto / inversión puede generar impactos al agua, aire y/o suelo?",
    },
    {
      id: "impacts_on_flora_fauna_landscape",
      question:
        "¿El proyecto / inversión puede generar impactos a la flora, fauna y/o habitas naturales, incluido el paisaje?",
    },
    {
      id: "impacts_on_social_labour",
      question: "¿El proyecto / inversión puede generar impactos sociales y/o laborales? ",
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

FormEnvironmentalSocialImpact.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormEnvironmentalSocialImpact;
