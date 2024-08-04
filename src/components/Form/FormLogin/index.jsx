import { useState } from "react";
import Logo from "../../CommonUI/Logo";
import { FiUserCheck } from "react-icons/fi";
import InputText from "../../CommonUI/InputText";
import Button from "../../CommonUI/Button";
import useAuth from "../../../data/authConnection.js";

const FormLogin = () => {
  const { login, token, expiresIn } = useAuth();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const inputs = [
    { id: "correo", name: "Correo Electrónico", type: "text", value: correo, setValue: setCorreo },
    { id: "contrasena", name: "Contraseña", type: "password", value: contrasena, setValue: setContrasena },
  ];

  const handleChange = (setValue) => (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(correo, contrasena);
      console.log(correo)
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
              <InputText
                key={index}
                title={input.name}
                type={input.type}
                value={input.value}
                onChange={handleChange(input.setValue)} 
                required
              />
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

export default FormLogin;
