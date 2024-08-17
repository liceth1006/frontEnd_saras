
import PropTypes from "prop-types";
import InputText from "../../CommonUI/InputText.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormFaras = ({ formData, setFormData }) => {

  const questions = [
    { id: "projectId", name: "ID del Proyecto", type: "text" },
    { id: "projectName", name: "Nombre del Proyecto", 
      type: "select",
      options: [
        { id: "bajo", name: "Bajo" },
        { id: "medio", name: "Medio" },
        { id: "alto", name: "Alto" },
      ],
     },
    { id: "evaluatorName", name: "Nombre del Evaluador", type: "text" },
    { id: "environmentalRisk", name: "Riesgo Ambiental", type: "text" },
    { id: "socialRisk", name: "Riesgo Social", type: "text" },
    { id: "mitigationPlan", name: "Plan de Mitigación", type: "text" },
    {
      id: "riskLevel",
      name: "Nivel de Riesgo",
      type: "select",
      options: [
        { id: "bajo", name: "Bajo" },
        { id: "medio", name: "Medio" },
        { id: "alto", name: "Alto" },
      ],
    },
    { id: "additionalComments", name: "Comentarios Adicionales", type: "text" },
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
            <div className="grid md:grid-cols-2 gap-4">
              {questions.map((question, index) => (
                question.type === "text" ? (
                  <div key={index}>
                    
                    <InputText
                      id={question.id}
                      title={question.name}
                      type="text"
                      value={formData[question.id] || ""}
                      onChange={handleChange(question.id)}
                      placeholder="Detalles..."
                      required
                    />
                  </div>
                ) : (
                  <div key={index}>
                   
                    <SelectOption
                      id={question.id}
                      title={question.name}
                      value={formData[question.id] || ""}
                      onChange={handleChange(question.id)}
                      data={question.options}
                      required
                    />
                  </div>
                )
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

FormFaras.propTypes = {
  formData: PropTypes.shape({
    projectId: PropTypes.string,
    projectName: PropTypes.string,
    evaluatorName: PropTypes.string,
    environmentalRisk: PropTypes.string,
    socialRisk: PropTypes.string,
    mitigationPlan: PropTypes.string,
    riskLevel: PropTypes.string,
    additionalComments: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormFaras;
