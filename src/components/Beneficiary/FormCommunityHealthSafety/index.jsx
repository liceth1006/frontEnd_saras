import Table from "../../../components/Table";
import PropTypes from "prop-types";
import SelectOptionTable from "../../CommonUI/SelectOptionTable";

const FormCommunityHealthSafety = ({ formData, setFormData }) => {
  const questions = [
    {
      id: "avoids_chemicals_pesticides",
      question: "¿Se evita la utilización de productos químicos, plaguicidas o herbicidas regulados u otro tipo de sustancias peligrosas en grandes cantidades?",
    },
    {
      id: "avoids_air_contaminants_dust",
      question: "¿Se evita una considerable liberación de elementos contaminantes y polvo nocivo en el aire?",
    },
    {
      id: "avoids_dismantling_old_infrastructure",
      question: "¿Se evita desmantelar y eliminar infraestructuras, edificios, equipos y otras instalaciones viejas?",
    },
    {
      id: "avoids_vehicle_movement",
      question: "¿Se evita generar un movimiento importante de vehículos dentro de las instalaciones y en los alrededores debido al proyecto o inversión?",
    },
    {
      id: "avoids_unqualified_security",
      question: "¿Se evita contratar personal de seguridad privada informal/no calificada?",
    },
    {
      id: "trained_security_personnel",
      question: "¿El personal de seguridad está capacitado en el empleo de la fuerza y conducta apropiada hacia trabajadores y la comunidad?",
    },
    {
      id: "avoids_large_water_use",
      question: "¿Se evita utilizar grandes cantidades de agua dulce?",
    },
    {
      id: "has_complaint_mechanism",
      question: "¿Se cuenta con un mecanismo para atender quejas y reclamos por parte de la comunidad?",
    },
    {
      id: "avoids_unpleasant_odors",
      question: "¿Se evita la generación de olores desagradables al ambiente?",
    },
    {
      id: "avoids_excessive_noise",
      question: "¿Se evita la generación de exceso de ruido en la zona?",
    },
    {
      id: "has_community_engagement_mechanisms",
      question: "¿Se cuenta con mecanismos de socialización para la comunidad?",
    },
    {
      id: "takes_covid19_precautions",
      question: "¿Se toman en cuenta medidas de prevención contra el COVID-19 y otras enfermedades contagiosas?",
    },
  ];

  // Maneja el cambio en el select
  const handleSelectChange = (id) => (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const columns = [
    { header: "Pregunta", accessor: "question" },
    { header: "", accessor: "answer" },
  ];

  // Mapea las preguntas a los datos requeridos por la tabla
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

FormCommunityHealthSafety.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormCommunityHealthSafety;
