import PropTypes from "prop-types";
import InputText from "../../CommonUI/InputText.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormCapitalProjectInputs = ({ formData, setFormData }) => {
  // Definición de preguntas y tipos de respuestas
  const questions = [
    {
      id: "water_source_for_activities",
      name: "¿De dónde obtiene el agua para sus actividades?",
      type: "select",
      options: [
        { id: "Acueducto", name: "Acueducto" },
        { id: "Compra a un tercero", name: "La compra a un tercero" },
        { id: "Autoprovisto", name: "Se autoprovee de la cuenca hidrográfica" },
        { id: "No requiere", name: "No requiere" },
      ],
    },
    {
      id: "water_source_for_consumption",
      name: "¿De dónde obtiene el agua para el consumo de los colaboradores?",
      type: "select",
      options: [
        { id: "Acueducto", name: "Acueducto" },
        { id: "Compra a un tercero", name: "La compra a un tercero" },
        { id: "Autoprovisto", name: "Se autoprovee de la cuenca hidrográfica" },
        { id: "No requiere", name: "No requiere" },
      ],
    },
    {
      id: "water_treatment_for_consumption",
      name: "Si se auto provee, ¿tiene tratamiento previo?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "Not Applicable", name: "No Aplica" },
      ],
    },
    {
      id: "chemical_storage_safety",
      name: "En caso de requerir almacenar los productos químicos o peligrosos, cuenta con una matriz de compatibilidad y/o lineamientos de seguridad para su almacenamiento?",
      type: "select",
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "Not Applicable", name: "No Aplica" },
      ],
    },
    {
      id: "energy_source",
      name: "¿Cómo obtiene la energía para sus actividades?",
      type: "select",
      options: [
        { id: "Empresa de energía", name: "Empresa de energía" },
        { id: "Autogeneración con carbón", name: "Autogeneración con carbón" },
        { id: "Autogeneración con gasolina/diesel", name: "Autogeneración con gasolina/diesel" },
        { id: "Autogeneración con gas", name: "Autogeneración con gas" },
        { id: "Autogeneración con fuente renovables", name: "Autogeneración con fuente renovables" },
        { id: "Autogeneración con energía Hidroeléctrica", name: "Autogeneración con energía Hidroeléctrica" },
        { id: "Autogeneración con energía Solar", name: "Autogeneración con energía Solar" },
        { id: "Autogeneración con energía Eólica", name: "Autogeneración con energía Eólica" },
        { id: "Autogeneración con energía Biomasa", name: "Autogeneración con energía Biomasa" },
        { id: "Autogeneración con energía Biogas", name: "Autogeneración con energía Biogas" },
        { id: "Autogeneración con energía Geotérmica", name: "Autogeneración con energía Geotérmica" },
        { id: "Autogeneración con energía Mareomotríz", name: "Autogeneración con energía Mareomotríz" },
        { id: "Otra", name: "Otra" },
      ],
    },
    {
      id: "lighting_type",
      name: "¿Qué tipo de iluminación utiliza?",
      type: "select",
      options: [
        { id: "Incandescentes", name: "Incandescentes" },
        { id: "Ahorradores", name: "Ahorradores" },
        { id: "LED", name: "LED" },
        { id: "Mixto", name: "Mixto" },
        { id: "No aplica", name: "No aplica" },
      ],
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

FormCapitalProjectInputs.propTypes = {
  formData: PropTypes.shape({
    water_source_for_activities: PropTypes.string,
    water_source_for_consumption: PropTypes.string,
    water_treatment_for_consumption: PropTypes.string,
    chemical_storage_safety: PropTypes.string,
    energy_source: PropTypes.string,
    lighting_type: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormCapitalProjectInputs;
