import PropTypes from "prop-types";
import InputText from "../../CommonUI/InputText.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormProjectCapitalEmissions = ({ formData, setFormData }) => {
  // Definición de preguntas y tipos de respuestas
  const questions = [
    {
      id: "equipment_emissions",
      name: "¿Utiliza equipos que generen emisiones a la atmósfera (caldera, incinerador, etc.)?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "Not Applicable", name: "No Aplica" },
      ],
    },
    {
      id: "equipment_details",
      name: "Especifique cuáles:",
      type: "text",
    },
    {
      id: "carbon_footprint",
      name: "Si mide su huella de carbono, favor indíquela (CO2 eq.):",
      type: "text",
    },
    {
      id: "wastewater_disposal",
      name: "¿A dónde son vertidas las aguas residuales?",
      type: "select",
      options: [
        { id: "Alcantarillado público", name: "Alcantarillado público" },
        { id: "Al suelo", name: "Al suelo" },
        { id: "Cuerpo de agua", name: "Cuerpo de agua" },
        { id: "No se generan", name: "No se generan" },
      ],
    },
    {
      id: "treatment_required",
      name: "¿Requieren de algún tratamiento?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "Not Applicable", name: "No Aplica" },
      ],
    },
    {
      id: "hazardous_waste_generation",
      name: "¿Se generan residuos sólidos peligrosos, hospitalarios o tóxicos?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "Not Applicable", name: "No Aplica" },
      ],
    },
    {
      id: "quantity_measured",
      name: "¿Mide la cantidad mensual generada?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "Not Applicable", name: "No Aplica" },
      ],
    },
    {
      id: "respel_registration",
      name: "¿Requiere registrarse como generador RESPEL?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "Not Applicable", name: "No Aplica" },
      ],
    },
    {
      id: "hazardous_waste_management",
      name: "¿Cómo son gestionados los residuos peligrosos, hospitalarios o tóxicos?",
      type: "text",
    },
    {
      id: "ordinary_waste_management",
      name: "¿Cómo son gestionados los residuos ordinarios?",
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

FormProjectCapitalEmissions.propTypes = {
  formData: PropTypes.shape({
    equipment_emissions: PropTypes.string,
    equipment_details: PropTypes.string,
    carbon_footprint: PropTypes.string,
    wastewater_disposal: PropTypes.string,
    treatment_required: PropTypes.string,
    hazardous_waste_generation: PropTypes.string,
    quantity_measured: PropTypes.string,
    respel_registration: PropTypes.string,
    hazardous_waste_management: PropTypes.string,
    ordinary_waste_management: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormProjectCapitalEmissions;
