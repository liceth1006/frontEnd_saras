import Table from "../../../components/Table";
import PropTypes from "prop-types";
import SelectOptionTable from "../../CommonUI/SelectOptionTable";

const FormLaborConditions = ({ formData, setFormData }) => {
  const questions = [
    {
      id: "hiring_non_discriminatory",
      question: "¿Se permite la contratación independientemente de la nacionalidad, raza, género o religión?",
    },
    {
      id: "equal_labor_conditions",
      question: "¿Existen condiciones de igualdad laboral independientemente del género del colaborador, según la normatividad nacional aplicable?",
    },
    {
      id: "workers_know_rights",
      question: "¿Los trabajadores tienen conocimiento de sus derechos laborales de manera clara?",
    },
    {
      id: "training_program",
      question: "¿Se cuenta con un programa de capacitación y experiencia laboral?",
    },
    {
      id: "temporary_workers_min_salary",
      question: "¿Los salarios de los trabajadores temporales siempre alcanzan el salario mínimo legal?",
    },
    {
      id: "respect_union_agreements",
      question: "¿Se verifica que se respeten los convenios de las organizaciones sindicales, cuando corresponda?",
    },
    {
      id: "foreign_workers_equal_conditions",
      question: "¿Las condiciones contractuales y laborales de los trabajadores de origen extranjero son similares a las de los trabajadores locales?",
    },
    {
      id: "accommodation_services_verified",
      question: "¿En el caso que se necesite el desplazamiento de trabajadores, se verifica que los servicios de alojamiento cumplan con los servicios básicos?",
    },
    {
      id: "forced_labor_trafficking_check",
      question: "¿Se identifica si se emplea mano de obra forzosa o personas traficadas?",
    },
    {
      id: "age_verification",
      question: "¿La empresa verifica la edad de los trabajadores en el momento de la contratación?",
    },
    {
      id: "child_labor_risk_management",
      question: "¿Existen procedimientos para identificar y gestionar los riesgos relacionados al trabajo infantil o forzoso en la cadena de abastecimiento principal?",
    },
    {
      id: "work_permits_usage",
      question: "¿Se usan permisos de trabajo para trabajos forzosos, en alturas, en caliente, con sustancias químicas, en espacios confinados, según aplique?",
    },
    {
      id: "pqr_mechanism",
      question: "¿Existe un mecanismo para que los trabajadores expresen sus PQR (incluyendo temas de discriminación y quejas anónimas)?",
    },
    {
      id: "avoids_mass_terminations",
      question: "¿La empresa evita realizar despidos colectivos?",
    },
    {
      id: "individual_termination_compliance",
      question: "¿Se tiene en cuenta la normativa nacional a la hora de realizar despidos individuales?",
    },
    {
      id: "accidents_incidents_recorded",
      question: "¿Registra accidentes, enfermedades o incidentes ocupacionales?",
    },
    {
      id: "workers_affiliated",
      question: "¿Los trabajadores están afiliados a ARL, EPS y pensiones?",
    },
    {
      id: "workers_know_safety_hazards",
      question: "¿Los trabajadores conocen los peligros laborales existentes y la forma de usar los elementos de protección personal (EPP)?",
    },
    {
      id: "emergency_procedures",
      question: "¿Cuenta con procedimientos operativos normalizados (PON) para la atención de emergencias?",
    },
    {
      id: "emergency_instructions_clear",
      question: "¿Son claras las indicaciones para todos los trabajadores en caso de emergencia?",
    },
    {
      id: "sg_sst_compliant",
      question: "¿La empresa tiene un Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) según Decreto 1072 de 2015?",
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

FormLaborConditions.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormLaborConditions;
