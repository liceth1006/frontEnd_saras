import { useEffect } from "react";
import PropTypes from "prop-types";
import InputText from "../../CommonUI/InputText.jsx";
import usePreload from "../../../hooks/preloaded.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";
const FormInvestmentProject = ({ formData, setFormData }) => {
  const { locationsData, landUsesData, soilTypesData, typeCategoriesData } =
    usePreload();

  useEffect(() => {
    if (locationsData.length > 0)
      setFormData((prevData) => ({
        ...prevData,
        locationId: locationsData[0].id || "",
      }));
    if (landUsesData.length > 0)
      setFormData((prevData) => ({
        ...prevData,
        landUseId: landUsesData[0].id || "",
      }));
    if (soilTypesData.length > 0)
      setFormData((prevData) => ({
        ...prevData,
        soilTypeId: soilTypesData[0].id || "",
      }));
    if (typeCategoriesData.length > 0)
      setFormData((prevData) => ({
        ...prevData,
        typeCategoryId: typeCategoriesData[0].id || "",
      }));
  }, [
    locationsData,
    landUsesData,
    soilTypesData,
    typeCategoriesData,
    setFormData,
  ]);

  const handleChange = (id) => (event) => {
    const { value, type } = event.target;
    const newValue = type === "number" ? parseFloat(value) : value;
    setFormData((prevData) => ({ ...prevData, [id]: newValue }));
  };

  const inputs = [
    {
      id: "projDescription",
      name: "Descripción del proyecto / inversión:",
      type: "text",
      value: formData.projDescription || "",
      setValue: handleChange("projDescription"),
      component: "InputText",
    },
    {
      id: "phase",
      name: "Fase o etapa del proyecto / inversión:",
      type: "select",
      value: formData.phase || "",
      setValue: handleChange("phase"),
      options: [
        { id: "Por iniciar", name: "Por iniciar" },
        { id: "En ejecución", name: "En ejecución" },
        { id: "Finalizado", name: "Finalizado" },
        { id: "En operación", name: "En operación" },
      ],
      component: "SelectOption",
    },
    {
      id: "totalTime",
      name: "Tiempo total de la obra",
      type: "number",
      value: formData.totalTime || "",
      setValue: handleChange("totalTime"),
      component: "InputText",
    },
    {
      id: "totalProjectValue",
      name: "Valor total del proyecto / inversión (COP):",
      type: "number",
      value: formData.totalProjectValue || "",
      setValue: handleChange("totalProjectValue"),
      component: "InputText",
    },
    {
      id: "locationId",
      name: "Ubicación del proyecto / inversión:",
      type: "select",
      value: formData.locationId || "",
      setValue: handleChange("locationId"),
      options: locationsData.map((item) => ({
        id: item.location_id,
        name: `${item.location_name} - ${item.location_department}`,
      })),
      component: "SelectOption",
    },
    {
      id: "typeCategoryId",
      name: "Categoría del proyecto / inversión",
      type: "select",
      value: formData.typeCategoryId || "",
      setValue: handleChange("typeCategoryId"),
      options: typeCategoriesData.map((item) => ({
        id: item.type_category_id,
        name: item.type_category_name,
      })),
      component: "SelectOption",
    },
    {
      id: "soilTypeId",
      name: "Zona donde se desarrolla",
      type: "select",
      value: formData.soilTypeId || "",
      setValue: handleChange("soilTypeId"),
      options: soilTypesData.map((item) => ({
        id: item.soil_type_id,
        name: item.soil_type_name,
      })),
      component: "SelectOption",
    },
    {
      id: "landUseId",
      name: "Suelo donde se desarrolla",
      type: "select",
      value: formData.landUseId || "",
      setValue: handleChange("landUseId"),
      options: landUsesData.map((item) => ({
        id: item.land_use_id,
        name: item.land_use_name,
      })),
      component: "SelectOption",
    },
    {
      id: "estimatedExecutionTime",
      name: "Plazo estimado de ejecución (en días)",
      type: "number",
      value: formData.estimatedExecutionTime || "",
      setValue: handleChange("estimatedExecutionTime"),
      component: "InputText",
    },
    {
      id: "areaOrLength",
      name: "Área (m²) o longitud (m) total intervenida, según aplique",
      type: "number",
      value: formData.areaOrLength || "",
      setValue: handleChange("areaOrLength"),
      component: "InputText",
    },
    {
      id: "consultationProcedure",
      name: "Procedimiento de Consulta",
      type: "select",
      value: formData.consultationProcedure || "",
      setValue: handleChange("consultationProcedure"),
      options: [
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "No Aplica", name: "No Aplica" },
      ],

      component: "SelectOption",
    },
    {
      id: "publicAccessStudies",
      name: "Estudios de Acceso Público",
      type: "select",
      value: formData.publicAccessStudies || "",
      setValue: handleChange("publicAccessStudies"),
      options: [
        { id: "Sí", name: "Sí" },
        { id: "Yes", name: "Sí" },
        { id: "No", name: "No" },
        { id: "No Aplica", name: "No Aplica" },
      ],
      component: "SelectOption",
    },
  ];

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <form className="w-full">
            <div className="grid grid-cols-none md:grid-cols-2 gap-4">
              {inputs.map((input, index) =>
                input.component === "InputText" ? (
                  <InputText
                    key={index}
                    title={input.name}
                    type={input.type}
                    value={input.value}
                    onChange={input.setValue}
                    required
                  />
                ) : (
                  <SelectOption
                    key={index}
                    title={input.name}
                    value={input.value}
                    onChange={input.setValue}
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

// Añadir validación de PropTypes
FormInvestmentProject.propTypes = {
  formData: PropTypes.shape({
    projDescription: PropTypes.string,
    phase: PropTypes.string,
    totalTime: PropTypes.string,
    totalProjectValue: PropTypes.number,
    locationId: PropTypes.string,
    typeCategoryId: PropTypes.string,
    soilTypeId: PropTypes.string,
    landUseId: PropTypes.string,
    estimatedExecutionTime: PropTypes.string,
    areaOrLength: PropTypes.string,
    consultationProcedure: PropTypes.string,
    publicAccessStudies: PropTypes.string,
  }).isRequired,

  setFormData: PropTypes.func.isRequired,
};

export default FormInvestmentProject;
