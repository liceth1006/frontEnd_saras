import { useEffect, useState } from "react";
import { preloadedConnection } from "../../../data/preloadedConnection.js";
import Logo from "../../CommonUI/Logo/index.jsx";
import { FiUserCheck } from "react-icons/fi";
import InputText from "../../CommonUI/InputText.jsx";
import Button from "../../CommonUI/Button.jsx";
import {useAuth} from "../../../contexts/AuthContext.jsx";
import SelectOption from "../../CommonUI/SelectOption.jsx";
import Swal from 'sweetalert2';

const FormRegister = () => {

  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [expedicion, setExpedicion] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [rol, setRol] = useState("");
  const [documentTypes, setDocumentTypes] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const data = await preloadedConnection.readDocumentType();
      setDocumentTypes(
        data.map((item) => ({
          id: item.doc_typ_id,
          name: item.doc_typ_name,
        }))
      );
    };
    fechData();
  }, []);

  const inputs = [
    {
      id: "per_name",
      name: "Nombre",
      type: "text",
      value: nombre,
      setValue: setNombre,
      component: "InputText",
    },
    {
      id: "per_lastname",
      name: "Apellido",
      type: "text",
      value: apellido,
      setValue: setApellido,
      component: "InputText",
    },
    {
      id: "doc_typ_id",
      name: "Tipo de Documento",
      value: tipoDocumento,
      setValue: setTipoDocumento,
      component: "SelectOption",
      options: documentTypes,
    },
    {
      id: "per_document",
      name: "Documento",
      type: "text",
      value: documento,
      setValue: setDocumento,
      component: "InputText",
    },
    {
      id: "per_expedition",
      name: "Expedición",
      type: "date",
      value: expedicion,
      setValue: setExpedicion,
      component: "InputText",
    },
    {
      id: "per_birthdate",
      name: "Fecha de Nacimiento",
      type: "date",
      value: fechaNacimiento,
      setValue: setFechaNacimiento,
      component: "InputText",
    },
    {
      id: "use_mail",
      name: "Correo",
      type: "email",
      value: email,
      setValue: setEmail,
      component: "InputText",
    },
    {
      id: "use_password",
      name: "Contraseña",
      type: "password",
      value: password,
      setValue: setPassword,
      component: "InputText",
    },
    {
      id: "use_role",
      name: "Rol",
      value: rol,
      setValue: setRol,
      component: "SelectOption",
      options: [
        { id: 1, name: "beneficiary" },
        { id: 2, name: "employee" },
      ],
    },
  ];

  const handleChange = (setValue) => (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    const data=  await register(
        nombre,
        apellido,
        tipoDocumento,
        documento,
        expedicion,
        fechaNacimiento,
        rol,
        email,
        password
      );
      console.log(rol)
      if (rol == 1) {
        window.location.href = "beneficiary/Mis proyectos";
    } else if (rol == 2) {
      Swal.fire({
        title: 'Registro en proceso',
        text: 'En unos momentos validaremos tus datos y un administrador te dará permiso.',
        icon: 'info',
        customClass: {
          confirmButton: 'custom-button'
        }
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
        window.location.href = "/";
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
      if (error === 'Ya existe un usuario con este correo electrónico') {
        Swal.fire({
          title: 'Error',
          text: 'Ya existe un usuario con este correo electrónico',
          icon: 'error',
          customClass: {
            confirmButton: 'custom-button'
          }
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Ya existe un usuario con este correo electrónico',
          icon: 'error',
          customClass: {
            confirmButton: 'custom-button'
      }});
        console.error("register failed:", error);

      }
    }
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <Logo title="EcoGestión" slogan="Solución Integral para la Gestión de SARAS" />
      <div className="w-full flex-1 mt-5">
        <div className="flex flex-col items-center">
          <div className="my-5 border-b text-center mb-10">
            <h2 className="leading-none px-2 inline-block text-2xl tracking-wide font-bold bg-white transform translate-y-1/2">
              Registrarse
            </h2>
          </div>
          <form className="w-full " onSubmit={handleSubmit}>
            <div className="grid grid-cols-none md:grid-cols-2 gap-4 ">
              {inputs.map((input, index) =>
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

export default FormRegister;
