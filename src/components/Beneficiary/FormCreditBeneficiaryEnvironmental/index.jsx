import PropTypes from "prop-types";
import InputText from "../../CommonUI/InputText.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormCreditBeneficiaryEnvironmental = ({ formData, setFormData }) => {
  // Definición de preguntas y tipos de respuestas
  const questions = [
    {
      id: "debt_substitution",
      name: "Favor indicar si se trata de una Sustitución de Deuda:",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
      ],
    },
    {
      id: "has_environmental_department",
      name: "¿Cuenta con Departamento de Gestión Ambiental y Social o persona encargada de temas A&S y climáticos?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
      ],
    },
    {
      id: "has_environmental_policies",
      name: "¿Cuenta con políticas ambientales?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
      ],
    },
    {
      id: "environmental_certifications",
      name: "¿Cuenta con certificaciones de tipo ambiental (p.e. ISO 14001)? Si la respuesta es afirmativa, indique cuáles:",
      type: "text",
    },
    {
      id: "known_impacts",
      name: "¿Conoce los impactos ambientales y sociales que genera su empresa? Si la respuesta es afirmativa, indique cuáles:",
      type: "text",
    },
    {
      id: "environmental_programs",
      name: "¿Cuenta con Programas ambientales o Planes de Manejo Ambiental? Si la respuesta es afirmativa, indique cuáles y anexe:",
      type: "text",
    },
    {
      id: "legal_requirements_documented",
      name: "¿Tiene documentados los requisitos legales ambientales?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
      ],
    },
    {
      id: "public_communication",
      name: "¿Se comunican los aspectos ambientales y sociales a todos los actores relevantes de forma pública y/o están disponibles online? Si la respuesta es afirmativa, dé una breve explicación del medio o indique el link:",
      type: "text",
    },
    {
      id: "supervision_activities",
      name: "¿Realizan actividades de supervisión/seguimiento ambiental y social en su empresa?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
      ],
    },
    {
      id: "accident_emergency_management",
      name: "¿Revisa que se identifiquen las situaciones en las que puedan producirse accidentes y emergencias, provee los equipos, capacitaciones y recursos necesarios en estos casos?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
      ],
    },
    {
      id: "labor_norms_compliance",
      name: "¿Cumple con la normatividad laboral nacional vigente?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
      ],
    },
    {
      id: "grievance_mechanism",
      name: "¿Cuenta con un mecanismo para atender quejas y reclamos por parte de la comunidad?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
      ],
    },
    {
      id: "environmental_liabilities",
      name: "¿Tiene pasivos ambientales? Si la respuesta es afirmativa, indique cuáles:",
      type: "text",
    },
  ];

  const handleChange = (id) => (event) => {
    const { value, type } = event.target;
    const newValue = type === 'number' ? parseFloat(value) : value;
    setFormData(prevData => ({ ...prevData, [id]: newValue }));
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <form className="w-full">
            <div className="grid grid-cols-none md:grid-cols-2 gap-4">
              {questions.map((question, index) => (
                question.type === "text" ? (
                  <InputText
                    key={index}
                    title={question.name}
                    type="text"
                    value={formData[question.id] || ""}
                    onChange={handleChange(question.id)}
                    placeholder="Detalles..."
                    rows="3"
                    style={{ width: '100%' }}
                  />
                ) : (
                  <SelectOption
                    key={index}
                    title={question.name}
                    value={formData[question.id] || ""}
                    onChange={handleChange(question.id)}
                    data={question.options}
                  />
                )
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

FormCreditBeneficiaryEnvironmental.propTypes = {
  formData: PropTypes.shape({
    debt_substitution: PropTypes.string,
    has_environmental_department: PropTypes.string,
    has_environmental_policies: PropTypes.string,
    environmental_certifications: PropTypes.string,
    known_impacts: PropTypes.string,
    environmental_programs: PropTypes.string,
    legal_requirements_documented: PropTypes.string,
    public_communication: PropTypes.string,
    public_communication_details: PropTypes.string,
    supervision_activities: PropTypes.string,
    accident_emergency_management: PropTypes.string,
    labor_norms_compliance: PropTypes.string,
    grievance_mechanism: PropTypes.string,
    environmental_liabilities: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormCreditBeneficiaryEnvironmental;
