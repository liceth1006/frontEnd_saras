import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import InputText from "../../components/CommonUI/InputText.jsx";
import SelectOption from "../../components/CommonUI/SelectOption.jsx";

const FormFARASEvaluator = ({ formData, setFormData }) => {
  const { itemName } = useParams();

  let Component;
  switch (itemName) {
    case "Buscar por nombre de proyecto":
      Component = Projects;
      break;
    case "Buscar por identificador":
      Component = Form;
      break;
    default:
      Component = NotFound;
  }

  const questions = [
    { id: "projectId", name: "ID del Proyecto", type: "text" },
    { id: "projectName", name: "Nombre del Proyecto", type: "text" },
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
                    <label htmlFor={question.id} className="block text-sm font-medium text-gray-700">
                      {question.name}
                    </label>
                    <InputText
                      id={question.id}
                      title={question.name}
                      type="text"
                      value={formData[question.id] || ""}
                      onChange={handleChange(question.id)}
                      placeholder="Detalles..."
                      rows="3"
                      style={{ width: '100%' }}
                    />
                  </div>
                ) : (
                  <div key={index}>
                    <label htmlFor={question.id} className="block text-sm font-medium text-gray-700">
                      {question.name}
                    </label>
                    <SelectOption
                      id={question.id}
                      title={question.name}
                      value={formData[question.id] || ""}
                      onChange={handleChange(question.id)}
                      data={question.options}
                    />
                  </div>
                )
              ))}
            </div>
          </form>
        </div>
      </div>
      <Component />
    </div>
  );
};

FormFARASEvaluator.propTypes = {
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

export default FormFARASEvaluator;
