import PropTypes from "prop-types";
import InputText from "../../CommonUI/InputText.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormFaras = ({ formData, setFormData }) => {
  const questions = [
    { id: "eval_id", name: "Evaluador del proyecto", type: "text" },
    { id: "emp_id", name: "Empleado", type: "text" },

    { id: "bene_info_id", name: "Información del beneficiario", type: "int" },
    { id: "concept", name: "Concepto ays", type: "select", options:[
      {id: "favorable", name:"Favorable"},
      {id: "favorable con compromisos", name:"Favorable con compromisos"},
      {id: "no favorable", name:"No Favorable"}
    ] },
    { id: "commitments_established", name: "Compromisos Establecidos", type: "text" },
    { id: "compliment", name: "Estado", type: "select",options:[
      { id: "pending_comminment", name: "Compromiso Pendiente" },
      { id: "unfulfilled", name: "Incumplido" },
      { id: "no commitments", name: "Sin compromisos" },
      { id: "rejected", name: "Rechazado" },
      { id: "Extension in process", name: "Prorroga en tramite" },
      { id: "The business was not done", name: "No se hizo el negocio" },
      { id: "Analysis in process", name: "Analisis en proceso" },
      { id: "Business in process", name: "Negocio en proceso" },
      { id: "In no objection with banking", name: "En no objecion con banca" },
      { id: "Objected by the bank", name:"Objetado por la banca" }

    ] },
    { id: "alert_date", name: "Fecha de Alerta", type: "date" },
    { id: "internal_date", name: "Fecha Interna", type: "date" },
    { id: "account_executive", name: "Cuenta Ejecutiva", type: "text" },
    { id: "project_value", name: "Valor del proyecto", type: "number" },
    { id: "credit_value", name: "Valor del crédito", type: "int" },
    { id: "inherent_category", name: "Categoría inherente", type: "text" },
    { id: "international_banking", name: "Banco Internacional", type: "text" },
    { id: "evaluation_date", name: "Fecha de evaluación", type: "date" },
    { id: "comments", name: "Compromisos", type: "text" }
  ];

  const handleChange = (id) => (event) => {
    const { value, type } = event.target;
    const newValue = type === "number" ? parseFloat(value) : value;
    setFormData((prevData) => ({ ...prevData, [id]: newValue }));
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <form className="w-full">
            <div className="grid md:grid-cols-2 gap-4">
              {questions.map((question, index) => (
                question.type === "text" || question.type === "int" || question.type === "date" || question.type === "number" ? (
                  <div key={index}>
                    <InputText
                      id={question.id}
                      title={question.name}
                      type={question.type === "int" ? "number" : question.type}
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
    eval_id: PropTypes.string,
    emp_id: PropTypes.string,
    riskLevel: PropTypes.string,
    bene_info_id: PropTypes.number,
    concept: PropTypes.string,
    commitments_established: PropTypes.string,
    status: PropTypes.string,
    alert_date: PropTypes.string,
    internal_date: PropTypes.string,
    account_executive: PropTypes.string,
    project_value: PropTypes.number,
    credit_value: PropTypes.number,
    inherent_category: PropTypes.string,
    international_banking: PropTypes.string,
    evaluation_date: PropTypes.string,
    comments: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormFaras;
