import { useEffect, useState } from "react";
import useBeneficiaryInfConnection from "../../../hooks/beneficiaryInformation.jsx";
import SelectOption from "../../../components/CommonUI/SelectOption";
import FormInvestmentProject from "../../../components/Beneficiary/FormInvestment/index.jsx";
import TabNavigation from "../../../components/TabNavigation";
import FormEnvironmentalManagement from "../../../components/Beneficiary/FormEnvironmentalManagement";

const Questions = () => {
  const { readBeneficiaryInf } = useBeneficiaryInfConnection();
  const [beneficiaryInf, setBeneficiaryInf] = useState([]);
  const [beneficiary, setBeneficiary] = useState(null); 
  const [hasTypeProyect, setHasTypeProyect] = useState(null); 
 



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

  const inputs = [
    {
      id: "bene_info_id",
      name: "BENEFICIARIO",
      type: "select",
      value: beneficiary,
      setValue: setBeneficiary,
      options: beneficiaryInf.map(item => ({
        id: item.bene_info_id, 
        name: `${item.company_name}`,
      })),
      component: "SelectOption",
    },
    {
      id: "has_type",
      name: "Tipo de proyecto",
      type: "select",
      value: hasTypeProyect,
      setValue: setHasTypeProyect,
      options: [
        { id: "1", name: "inversion" },
        { id: "2", name: "Capital de trabajo" },
      ],
      component: "SelectOption",
    },
  ];

  const handleChange = (setValue) => (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const tabs = [
    {
      name: 'INFORMACIÓN DEL PROYECTO',
      component: <FormInvestmentProject />
    },
    {
      name: ' GESTIÓN AMBIENTAL Y SOCIAL DEL BENEFICIARIO',
      component: <FormEnvironmentalManagement idBenf={parseInt(beneficiary)}></FormEnvironmentalManagement>
    },
    {
      name: ' PERMISOS AMBIENTALES Y SOCIALES',
      component: <div>Contenido de Tab 3</div>
    }
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

      {hasTypeProyect === "1" && (
        <div>
          <h2>Formulario de Inversión</h2>
          <TabNavigation tabs={tabs}  />
         
        </div>
      )}

      {hasTypeProyect === "2" && (
        <div>
          <h2>Formulario de Capital de Trabajo</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="working_capital_amount">
                Monto de Capital de Trabajo
              </label>
              <input
                id="working_capital_amount"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="working_capital_duration">
                Duración del Capital de Trabajo
              </label>
              <input
                id="working_capital_duration"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Otros campos específicos para capital de trabajo */}
          </form>
        </div>
      )}
    </>
  );
};

export default Questions;
