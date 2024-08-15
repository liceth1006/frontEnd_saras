import  { useEffect } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import InputText from "../../CommonUI/InputText.jsx";


import usePreload from "../../../hooks/preloaded.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormBeneficiaryInfo = ({ formData, setFormData }) => {
  const { mainActivityData, exclusionsData, sectorData } = usePreload();

  useEffect(() => {
    // Initialize form data if needed
    if (mainActivityData.length > 0) setFormData(prevData => ({ ...prevData, mainActivity: mainActivityData[0].id || "" }));
    if (exclusionsData.length > 0) setFormData(prevData => ({ ...prevData, exclusions: exclusionsData[0].id || "" }));
    if (sectorData.length > 0) setFormData(prevData => ({ ...prevData, sector: sectorData[0].id || "" }));
  }, [mainActivityData, exclusionsData, sectorData, setFormData]);

  const handleChange = (id) => (event) => {
    const { value } = event.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
    
    // Special handling for exclusion
    if (id === "hasExclusion") {
      if (value !== "1") {
        setFormData(prevData => ({ ...prevData, exclusions: "" }));
      }
    }
  };


  const inputs = [
    {
      id: "companyName",
      name: "Razón social de la empresa o entidad que tomará el crédito",
      type: "text",
      value: formData.companyName || "",
      setValue: handleChange("companyName"),
      placeholder: "Ingrese el nombre de la empresa",
      component: "InputText",
    },
    {
      id: "companyDescription",
      name: "Describa a qué se dedica",
      type: "text",
      value: formData.companyDescription || "",
      setValue: handleChange("companyDescription"),
      placeholder: "Describa brevemente a qué se dedica la empresa",
      component: "InputText",
    },
    {
      id: "sector",
      name: "Describa a qué sector pertenece",
      type: "select",
      value: formData.sector || "",
      setValue: handleChange("sector"),
      options: sectorData.map(item => ({
        id: item.sector_id,
        name: item.sector_name,
      })),
      placeholder: "Seleccione el sector",
      component: "SelectOption",
    },
    {
      id: "mainActivity",
      name: "CIIU Principal",
      type: "select",
      value: formData.mainActivity || "",
      setValue: handleChange("mainActivity"),
      options: mainActivityData.map(item => ({
        id: item.acti_id,
        name: item.acti_name,
      })),
      placeholder: "Seleccione la actividad principal",
      component: "SelectOption",
    },
    {
      id: "creditValue",
      name: "Valor estimado a financiar (COP)",
      type: "number",
      value: formData.creditValue || "",
      setValue: handleChange("creditValue"),
      placeholder: "Ingrese el valor estimado en COP",
      component: "InputText",
    },
    {
      id: "resources",
      name: "Describa el uso de los recursos de crédito",
      type: "text",
      value: formData.resources || "",
      setValue: handleChange("resources"),
      placeholder: "Describa cómo se utilizarán los recursos",
      component: "InputText",
    },
    {
      id: "hasExclusion",
      name: "Tiene Exclusión",
      type: "select",
      value: formData.hasExclusion || "",
      setValue: handleChange("hasExclusion"),
      options: [
        { id: "1", name: "Sí" },
        { id: "2", name: "No" },
      ],
      placeholder: "Seleccione una opción",
      component: "SelectOption",
    },
    ...(formData.hasExclusion === "1" ? [{
      id: "exclusions",
      name: "Exclusiones",
      type: "select",
      value: formData.exclusions || "",
      setValue: handleChange("exclusions"),
      options: exclusionsData.map(item => ({
        id: item.exc_id,
        name: item.exc_name,
      })),
      placeholder: "Seleccione una exclusión",
      component: "SelectOption",
    }] : []),
  ];


  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <form className="w-full" >
            <div className="grid grid-cols-none md:grid-cols-2 gap-4">
              {inputs.map((input, index) =>
                input.component === "InputText" ? (
                  <InputText
                    key={index}
                    title={input.name}
                    type={input.type}
                    value={input.value}
                    placeholder={input.placeholder}
                    onChange={input.setValue}
                    required
                  />
                ) : (
                  <SelectOption
                    key={index}
                    title={input.name}
                    value={input.value}
                    onChange={input.setValue}
                    placeholder={input.placeholder}
                    data={input.options}
                  />
                )
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


FormBeneficiaryInfo.propTypes = {
  formData: PropTypes.shape({
    companyName: PropTypes.string,
    companyDescription: PropTypes.string,
    resources: PropTypes.string,
    sector: PropTypes.string,
    mainActivity: PropTypes.string,
    exclusions: PropTypes.string,
    creditValue: PropTypes.string,
    hasExclusion: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormBeneficiaryInfo;
