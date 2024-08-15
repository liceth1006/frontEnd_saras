import Table from "../../../components/Table";
import PropTypes from "prop-types";
import SelectOptionTable from "../../CommonUI/SelectOptionTable";

const FormEnvironmentalManagement = ({ formData, setFormData }) => {
  const questions = [
    {
      id: "environmental_management_department",
      question: "¿Cuenta con Departamento de Gestión Ambiental y Social?",
    },
    {
      id: "responsible_staff",
      question: "¿Cuenta con personal encargado de temas A&S y climáticos?",
    },
    {
      id: "policies_guidelines",
      question:
        "¿Cuenta con políticas o directrices ambientales en su empresa?",
    },
    {
      id: "iso_certifications",
      question: "¿Cuenta con certificaciones de tipo ambiental ISO 14001?",
    },
    {
      id: "legal_matrix",
      question: "¿Cuenta con matriz legal ambiental o documento similar?",
    },
    {
      id: "identified_impacts",
      question:
        "¿Identifica y previene los impactos ambientales y sociales de su empresa?",
    },
    {
      id: "complaints_mechanism",
      question:
        "¿Cuenta con un mecanismo para atender quejas y reclamos por parte de la comunidad?",
    },
    {
      id: "complies_with_regulations",
      question:
        "¿Cumple con la normatividad laboral nacional aplicable vigente?",
    },
    {
      id: "environmental_supervision",
      question:
        "¿Realizan supervisión ambiental y social en su empresa congruente a la magnitud de sus actividades?",
    },
    {
      id: "public_communication",
      question:
        "¿Comunica públicamente los temas socio ambientales a los actores relevantes y/o están disponibles online?",
    },
    {
      id: "emergency_situations",
      question:
        "¿Identifica situaciones emergencias, provee equipos, capacitaciones y recursos necesarios en estos casos y evitar accidentes?",
    },
    {
      id: "sanctioned",
      question:
        "¿Ha sido sancionado por incumplimiento de normatividad ambiental o laboral?",
    },
    {
      id: "environmental_liabilities",
      question: "¿Tiene pasivos ambientales?",
    },
    {
      id: "complaints",
      question:
        "¿Ha recibido denuncias o manifestaciones de la comunidad o de los empleados por los impactos ambientales/sociales?",
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

FormEnvironmentalManagement.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormEnvironmentalManagement;
