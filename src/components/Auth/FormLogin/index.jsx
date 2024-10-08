import { useState } from "react";
import Logo from "../../CommonUI/Logo";
import { FiUserCheck } from "react-icons/fi";
import InputText from "../../CommonUI/InputText";
import Button from "../../CommonUI/Button";
import { useAuth } from "../../../contexts/AuthContext.jsx";
import Swal from 'sweetalert2';
const FormLogin = () => {
  const { login,setToken } = useAuth();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const inputs = [
    {
      id: "correo",
      name: "Correo Electrónico",
      type: "text",
      value: correo,
      setValue: setCorreo,
    },
    {
      id: "contrasena",
      name: "Contraseña",
      type: "password",
      value: contrasena,
      setValue: setContrasena,
    },
  ];

  const handleChange = (setValue) => (event) => {
    setValue(event.target.value);
  };

 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const data = await login(correo, contrasena);
        console.log("esta es", data);
        setToken(data.token);
        if (data.userRole === "beneficiary") {
          window.location.href = "beneficiary/Mis proyectos";
        } else if (data.userRole === "employee") {
            window.location.href = "/employee/Proyectos";
        } else {
            console.error(data.error);
            Swal.fire({
                title: 'Error',
                text: 'El rol del usuario no es reconocido. Por favor, contacta con el soporte.',
                icon: 'error',
                customClass: {
                    confirmButton: 'custom-button' 
                }
            });
        }
    } catch (error) {
        console.error("Login failed:", error);
        Swal.fire({
            title: 'Error de Login',
            text: 'Por favor, revisa tus credenciales. Asegúrate de que el correo y la contraseña sean correctos.',
            icon: 'error',
            customClass: {
                confirmButton: 'custom-button' 
            }
        });
    }
};
  

  return (
    <div className="mt-5 flex flex-col items-center">
      <Logo title="EcoGestión" slogan="Solución Integral para la Gestión de SARAS" />
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
