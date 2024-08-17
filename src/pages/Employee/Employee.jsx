import FormFaras from "../../components/Employee/FormFaras";
//import Faras from "../../components/Employee/Faras/"
import { useState } from "react";

const FormFarasPage=()=>{
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const handleNext = () => {

    // Validar si se ha seleccionado una exclusión
    if (validateExclusions(formData)) {
      return; // Detener la navegación si hay una exclusión
    }}
    const handleBack = () => {
      setCurrentSection((prevSection) => prevSection - 1);
    };
  
    const handleSubmit = async () => {
      try {
        // Log formData to debug the issue
        console.log("FormData before submitting:", formData);
      } catch (error) {
        // Log detailed error information
        console.log(error);
        console.error(
          "Error al enviar los datos:",
          error.response ? error.response.data : error.message
        );
        /*Swal.fire({
          title: "Error",
          text: "Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo.",
          icon: "error",customClass: {
            confirmButton: 'custom-button' 
        }
        });
      }*/
    };  

  return(
    <>
         {currentSection === 0 && (
        <div>
          <div className="border-b-2 border-secondary-color py-4 px-5">
            <h3 className="font-semibold">sección</h3>
            <h2 className="text-2xl font-bold text-secondary-color">
              INFORMACIÓN GENERAL DEL BENEFICIARIO DEL CRÉDITO
            </h2>
          </div>

          <FormFaras formData={formData} setFormData={setFormData} />
        </div>
        
      )}
      <div className="flex justify-center space-x-4 mt-5 p-6 ">
        {currentSection > 0 && (
          <button
            onClick={handleBack}
            className="px-8 py-2  bg-btn-primary-color hover:bg-btn-primary-hover hover:text-white text-white rounded transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            Atrás
          </button>
        )}
        {currentSection < 0 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Siguiente
          </button>
        )}
        {currentSection === 0 && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Enviar
          </button>
        )}
      </div>
    </>

      )
}}

export default FormFarasPage;