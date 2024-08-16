import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import usePreload from "../../../hooks/preloaded.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";
import InputText from "../../CommonUI/InputText.jsx"; // Asegúrate de que esta ruta es correcta

const FormPermit = ({ formData, setFormData }) => {
  const { envirPPermitsData } = usePreload();
  const [selectedPermit, setSelectedPermit] = useState(
    formData.selectedPermit || []
  );
  const [projectPermits, setProjectPermits] = useState("");
  const [status, setStatus] = useState("");
  const [resolutionNumber, setResolutionNumber] = useState("");
  const [resolutionYear, setResolutionYear] = useState("");
  const [issuingEntity, setIssuingEntity] = useState("");

  useEffect(() => {
    if (envirPPermitsData.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        projectPermits: envirPPermitsData[0].perm_id || "",
      }));
    }
  }, [envirPPermitsData, setFormData]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      selectedPermit,
      status,
      resolutionNumber,
      resolutionYear,
      issuingEntity,
    }));
  }, [
    selectedPermit,
    status,
    resolutionNumber,
    resolutionYear,
    issuingEntity,
    setFormData,
  ]);

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    switch (field) {
      case "projectPermits":
        setProjectPermits(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "resolutionNumber":
        setResolutionNumber(value);
        break;
      case "resolutionYear":
        setResolutionYear(value);
        break;
      case "issuingEntity":
        setIssuingEntity(value);
        break;
      default:
        break;
    }
  };

  const handleAddPermit = (event) => {
    event.preventDefault();
    const permit = envirPPermitsData.find(
      (item) => item.perm_id === parseInt(projectPermits)
    );
    if (
      permit &&
      !selectedPermit.some((item) => item.perm_id === permit.perm_id)
    ) {
      setSelectedPermit([
        ...selectedPermit,
        {
          ...permit,
          status,
          resolution_number: resolutionNumber,
          resolution_year: resolutionYear,
          issuing_entity: issuingEntity,
        },
      ]);
      // Reset form fields after adding
      setProjectPermits("");
      setStatus("");
      setResolutionNumber("");
      setResolutionYear("");
      setIssuingEntity("");
    }
  };

  const handleRemovePermit = (permId) => {
    setSelectedPermit(selectedPermit.filter((item) => item.perm_id !== permId));
  };

  const statusOptions = [
    "En trámite",
    "Vigente",
    "Por iniciar gestión",
    "Suspendido / No vigente",
  ];

  const inputs = [
    {
      id: "projectPermits",
      name: "Seleccione el Permiso Ambiental:",
      type: "select",
      value: projectPermits,
      setValue: setProjectPermits,
      options: envirPPermitsData.map((item) => ({
        id: item.perm_id,
        name: item.perm_name,
      })),
      component: "SelectOption",
    },
    {
      id: "status",
      name: "Estado:",
      type: "select",
      value: status,
      setValue: setStatus,
      options: statusOptions.map((option) => ({
        id: option,
        name: option,
      })),
      component: "SelectOption",
    },
    {
      id: "resolutionNumber",
      name: "Número de Resolución:",
      type: "text",
      value: resolutionNumber,
      setValue: setResolutionNumber,
    },
    {
      id: "resolutionYear",
      name: "Año de Resolución:",
      type: "number",
      value: resolutionYear,
      setValue: setResolutionYear,
    },
    {
      id: "issuingEntity",
      name: "Entidad Emisora:",
      type: "text",
      value: issuingEntity,
      setValue: setIssuingEntity,
    },
  ];

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <form className="w-full" onSubmit={handleAddPermit}>
            <div className="grid grid-cols-2 md:grid-cols gap-4">
              {inputs.map((input, index) =>
                input.type === "select" ? (
                  <SelectOption
                    key={index}
                    title={input.name}
                    value={input.value}
                    onChange={handleChange(input.id)}
                    data={input.options}
                  />
                ) : (
                  <InputText
                    key={index}
                    title={input.name}
                    type={input.type}
                    value={input.value}
                    onChange={handleChange(input.id)}
                    placeholder="Detalles..."
                    rows={input.type === "textarea" ? "3" : undefined}
                    style={{ width: "100%" }}
                  />
                )
              )}
            </div>
            <div className="flex justify-center space-x-4 mt-5 p-6 ">
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Agregar
              </button>
            </div>
          </form>
          <div className="mt-5 w-full">
            <div className="px-10">
              <h3 className="text-lg font-semibold">Permisos Seleccionados:</h3>
              <ul className="mt-2">
                {selectedPermit.map((item) => (
                  <li
                    key={item.perm_id}
                    className="flex justify-between items-center p-2 border-b"
                  >
                    <span>{`${item.perm_name} - ${item.status} `}</span>
                    <button
                      onClick={() => handleRemovePermit(item.perm_id)}
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

FormPermit.propTypes = {
  formData: PropTypes.shape({
    selectedPermit: PropTypes.arrayOf(
      PropTypes.shape({
        perm_id: PropTypes.number.isRequired,
        perm_name: PropTypes.string.isRequired,
        status: PropTypes.string,
        resolution_number: PropTypes.string,
        resolution_year: PropTypes.number,
        issuing_entity: PropTypes.string,
      })
    ),
    projectPermits: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormPermit;
