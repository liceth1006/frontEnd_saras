import { useEffect, useState } from "react";
import InputText from "../../CommonUI/InputText.jsx";
import { FiUserCheck } from "react-icons/fi";
import Button from "../../CommonUI/Button.jsx";
import useBeneficiaryInfConnection from "../../../hooks/beneficiaryInformation.jsx";
import usePreload from "../../../hooks/preloaded.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormBeneficiaryInfo = () => {
  const { postBeneficiaryInf } = useBeneficiaryInfConnection();
  const { mainActivityData, exclusionsData, sectorData, projectTypeData } = usePreload();
  
  const [hasExclusion, setHasExclusion] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [resources, setResources] = useState("");
  const [sector, setSector] = useState("");
  const [mainActivity, setMainActivity] = useState("");
  const [exclusions, setExclusions] = useState("");
  const [projectType, setProjectType] = useState("");
  const [creditValue, setCreditValue] = useState("");

  useEffect(() => {
    if (mainActivityData.length > 0) setMainActivity(mainActivityData[0].id || "");
    if (exclusionsData.length > 0) setExclusions(exclusionsData[0].id || "");
    if (sectorData.length > 0) setSector(sectorData[0].id || "");
    if (projectTypeData.length > 0) setProjectType(projectTypeData[0].id || "");
  }, [mainActivityData, exclusionsData, sectorData, projectTypeData]);

  const inputs = [
    {
      id: "company_name",
      name: "Razón social de la empresa o entidad que tomará el crédito",
      type: "text",
      value: companyName,
      setValue: setCompanyName,
      component: "InputText",
    },
    {
      id: "company_description",
      name: "Describa a que  se dedica",
      type: "text",
      value: companyDescription,
      setValue: setCompanyDescription,
      component: "InputText",
    },
    {
      id: "project_type",
      name: "Tipo de Proyecto",
      type: "select",
      value: projectType,
      setValue: setProjectType,
      options: projectTypeData.map(item => ({
        id: item.project_types_id,
        name: item.type_name,
      })),
      component: "SelectOption",
    },
    {
      id: "sector_id",
      name: "Describa a que sector pertenece",
      type: "select",
      value: sector,
      setValue: setSector,
      options: sectorData.map(item => ({
        id: item.sector_id,
        name: item.sector_name,
      })),
      component: "SelectOption",
    },
    {
      id: "main_activity",
      name: "CIIU Principal",
      type: "select",
      value: mainActivity,
      setValue: setMainActivity,
      options: mainActivityData.map(item => ({
        id: item.acti_id ,
        name: item.acti_name,
      })),
      component: "SelectOption",
    },
    {
      id: "credit_value",
      name: " Valor estimado a financiar (COP)",
      type: "number",
      value: creditValue,
      setValue: setCreditValue,
      component: "InputText",
    },
    {
      id: "resources",
      name: "Describa el uso de los recursos de crédito",
      type: "text",
      value: resources,
      setValue: setResources,
      component: "InputText",
    },

    {
      id: "has_exclusion",
      name: "Tiene Exclusión",
      type: "select",
      value: hasExclusion,
      setValue: setHasExclusion,
      options: [
        { id: "1", name: "Sí" },
        { id: "2", name: "No" },
      ],
      component: "SelectOption",
    },
  

   // Exclusiones sólo se muestra si `hasExclusion` es "Sí"
   ...(hasExclusion === "1" ? [{
    id: "exclusions",
    name: "Exclusiones",
    type: "select",
    value: exclusions,
    setValue: setExclusions,
    options: exclusionsData.map(item => ({
      id: item.exc_id  ,
      name: item.exc_name,
    })),
    component: "SelectOption",
  }] : []),
    
  ];

  const handleChange = (setValue) => (event) => {
    const { value, id } = event.target;
    setValue(value);
    // Si estamos cambiando `hasExclusion`, queremos actualizar el estado de `exclusions`
    if (id === "has_exclusion") {
      setHasExclusion(value);
      // Opcional: reiniciar exclusiones si `hasExclusion` se cambia a "No"
      if (value !== "1") {
        setExclusions("");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await postBeneficiaryInf(
        mainActivity,
        hasExclusion,
        exclusions,
        companyName,
        companyDescription,
        resources,
        sector,
        projectType,
        creditValue
      );
    } catch (error) {
      console.error("Register failed:", error);
    }
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <div className="my-5 border-b text-center mb-10">
            <h2 className="leading-none px-2 inline-block text-2xl tracking-wide font-bold bg-white transform translate-y-1/2">
              INFORMACIÓN GENERAL DEL BENEFICIARIO DEL CRÉDITO
            </h2>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-none md:grid-cols-2 gap-4">
            {inputs.map((input, index) =>
                input.component === "InputText" ? (
                  <InputText
                    key={index}
                    title={input.name}
                    type={input.type}
                    value={input.value || ""} 
                    onChange={handleChange(input.setValue)}
                    required
                  />
                ) : (
                  <SelectOption
                    key={index}
                    title={input.name}
                    value={input.value || ""} 
                    onChange={handleChange(input.setValue)}
                    data={input.options}
                  />
                )
              )}
            </div>
            <div className="flex justify-center">
              <div className="w-6/12">
                <Button
                  type="submit"
                  className="bg-btn-primary-color hover:bg-btn-primary-hover hover:text-white"
                >
                  <FiUserCheck className="mr-2" />
                  <span> Registrarse</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormBeneficiaryInfo;
