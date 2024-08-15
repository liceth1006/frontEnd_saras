import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import usePreload from "../../../hooks/preloaded.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormProjectAreas = ({ formData, setFormData }) => {
  const { areaInterestData } = usePreload();
  const [selectedAreas, setSelectedAreas] = useState(
    formData.selectedAreas || []
  );
  const [projectAreas, setProjectAreas] = useState("");

  useEffect(() => {
    if (areaInterestData.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        projectAreas: areaInterestData[0].area_id || "",
      }));
    }
  }, [areaInterestData, setFormData]);

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, selectedAreas }));
  }, [selectedAreas, setFormData]);

  const handleChange = (setValue) => (event) => {
    setValue(event.target.value);
  };

  const handleAddArea = (event) => {
    event.preventDefault();
    const area = areaInterestData.find(
      (item) => item.area_id === parseInt(projectAreas)
    );
    if (area && !selectedAreas.some((item) => item.area_id === area.area_id)) {
      setSelectedAreas([...selectedAreas, area]);
    }
  };

  const handleRemoveArea = (areaId) => {
    setSelectedAreas(selectedAreas.filter((area) => area.area_id !== areaId));
  };

  const inputs = [
    {
      id: "area_id",
      name: "Seleccione las Zonas Afectadas por el Proyecto/Inversión (Radio de Influencia: < 20 m):",
      type: "select",
      value: projectAreas,
      setValue: setProjectAreas,
      options: areaInterestData.map((item) => ({
        id: item.area_id,
        name: `${item.area_name} `,
      })),
      component: "SelectOption",
    },
  ];

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <form className="w-full" onSubmit={handleAddArea}>
            <div className="grid grid-cols-none md:grid-cols gap-4">
              {inputs.map((input, index) => (
                <SelectOption
                  key={index}
                  title={input.name}
                  value={input.value}
                  onChange={handleChange(input.setValue)}
                  data={input.options}
                />
              ))}
              <div className="flex justify-center space-x-4 mt-5 p-6 ">
                <button
                  type="submit"
                  className="mt-4 px-4 py-2  bg-blue-500 text-white rounded"
                >
                  Agregar
                </button>
              </div>
            </div>
          </form>
          <div className="mt-5 w-full">
            <div className="px-10">
              <h3 className="text-lg font-semibold">Zonas Seleccionadas:</h3>
              <ul className="mt-2">
                {selectedAreas.map((area) => (
                  <li
                    key={area.area_id}
                    className="flex justify-between items-center p-2 border-b"
                  >
                    <span>{area.area_name}</span>
                    <button
                      onClick={() => handleRemoveArea(area.area_id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormProjectAreas.propTypes = {
  formData: PropTypes.shape({
    selectedAreas: PropTypes.arrayOf(
      PropTypes.shape({
        area_id: PropTypes.number.isRequired,
        area_name: PropTypes.string.isRequired,
      })
    ),
    projectAreas: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormProjectAreas;
