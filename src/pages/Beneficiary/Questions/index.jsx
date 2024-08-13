import { useEffect, useState } from "react";
import useBeneficiaryInfConnection from "../../../hooks/beneficiaryInformation.jsx";
import useQuestionProjectTypeConnection from "../../../hooks/questionProjectType.jsx"; // Asegúrate de que la ruta sea correcta
import SelectOption from "../../../components/CommonUI/SelectOption";
import Table from "../../../components/Table";

const Questions = () => {
  const { readBeneficiaryInf } = useBeneficiaryInfConnection();
  const { getQuestionProjectTypeDetails } = useQuestionProjectTypeConnection();
  const [beneficiaryInf, setBeneficiaryInf] = useState([]);
  const [beneficiary, setBeneficiary] = useState(null); 
  const [questionProjectDetails, setQuestionProjectDetails] = useState([]); 

  useEffect(() => {
    const fetchBeneficiaryInfo = async () => {
      try {
        const data = await readBeneficiaryInf();
        setBeneficiaryInf(data);
      } catch (error) {
        console.error("Error al recuperar los detalles del beneficiario:", error);
      }
    };
    fetchBeneficiaryInfo();
  }, [readBeneficiaryInf]);

  useEffect(() => {
    const fetchQuestionProjectDetails = async () => {
      if (beneficiary) { // Solo realiza la solicitud si hay un beneficiario seleccionado
        try {
          const data = await getQuestionProjectTypeDetails(beneficiary);
         // Convierte el objeto a un array de valores
         const dataArray = Object.values(data);
         setQuestionProjectDetails(dataArray);
        } catch (error) {
          console.error("Error al recuperar los detalles del tipo de proyecto:", error);
        }
      }
    };
    fetchQuestionProjectDetails();
  }, [beneficiary, getQuestionProjectTypeDetails]);

  const inputs = [
    {
      id: "bene_info_id",
      name: "Tipo de Proyecto",
      type: "select",
      value: beneficiary,
      setValue: setBeneficiary,
      options: beneficiaryInf.map(item => ({
        id: item.bene_info_id, 
        name: `${item.type_name} - ${item.company_name}`,
      })),
      component: "SelectOption",
    },
  ];

  const handleChange = (setValue) => (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const columns = [
    { header: "Tipo crédito", accessor: "question_name" },
  ];

  return (
    <>
      {inputs.map((input, index) => (
        <SelectOption
          key={index}
          title={input.name}
          value={input.value || ""} 
          onChange={handleChange(input.setValue)}
          data={input.options}
        />
      ))}
      <Table columns={columns} data={questionProjectDetails} />
    </>
  );
};

export default Questions;
