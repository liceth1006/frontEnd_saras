import { useState } from "react";
import Logo from "../../CommonUI/Logo/index.jsx";
import { FiUserCheck } from "react-icons/fi";
import InputText from "../../CommonUI/InputText.jsx";
import Button from "../../CommonUI/Button.jsx";
import useAuth from "../../../data/authConnection.js";
import SelectOption from "../../CommonUI/SelectOption.jsx";

const FormRegister = () => {
  const { login, token, expiresIn } = useAuth();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const inputs = [
    { id: "per_name", name: "Nombre", type: "text", value: correo, setValue: setCorreo, component: "InputText" },
    { id: "per_lastname", name: "Apellido", type: "text", value: contrasena, setValue: setContrasena, component: "InputText" },
    { id: "doc_typ_id", name: "Tipo de Documento", value: "", setValue: setCorreo, component: "SelectOption", options: ["Cédula", "Pasaporte"] },
    { id: "per_document", name: "Documento", type: "text", value: contrasena, setValue: setContrasena, component: "InputText" },
    { id: "per_expedition", name: "Expedición", type: "date", value: contrasena, setValue: setContrasena, component: "InputText" },
    { id: "per_birthdate", name: "Fecha de Nacimiento", type: "date", value: contrasena, setValue: setContrasena, component: "InputText" },
    { id: "use_mail", name: "Correo", type: "email", value: contrasena, setValue: setContrasena, component: "InputText" },
    { id: "use_password", name: "Contraseña", type: "password", value: contrasena, setValue: setContrasena, component: "InputText" },
    { id: "use_role", name: "Rol", value: "", setValue: setCorreo, component: "SelectOption", options: ["Admin", "User"] },
  ];

  const handleChange = (setValue) => (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(correo, contrasena);
      console.log("Login successful", { token, expiresIn });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <Logo />
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <div className="my-5 border-b text-center mb-10">
            <h2 className="leading-none px-2 inline-block text-2xl tracking-wide font-bold bg-white transform translate-y-1/2">
              Iniciar Sesión
            </h2>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            {inputs.map((input, index) => (
              input.component === "InputText" ? (
                <InputText
                  key={index}
                  title={input.name}
                  type={input.type}
                  value={input.value}
                  onChange={handleChange(input.setValue)} 
                  required
                />
              ) : (
                <SelectOption
                  key={index}
                  title={input.name}
                  value={input.value}
                  onChange={handleChange(input.setValue)}
                  data={input.options}
                />
              )
            ))}
            <Button
              type="submit"
              className="bg-btn-primary-color hover:bg-btn-primary-hover hover:text-white"
            >
              <FiUserCheck className="mr-2" />
              <span>Inicia Sesión</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;


