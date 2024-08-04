
import { HiOutlineLogin } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import FormRegister from "../components/Form/FormRegister";
function Register (){
  return(
    <>
     <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-background-secondary rounded-l-lg text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/foto-gratis/planta-ahuecamiento-manos-salvar-medio-ambiente_53876-129538.jpg?t=st=1722727322~exp=1722730922~hmac=559a6e31cd25bce474160a308fbb508f0daf54212a6d5dff9241d1c72ffae20a&w=740')",
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
          <NavLink to="/">
          <HiOutlineLogin className="text-3xl" />
          </NavLink>
              <FormRegister></FormRegister>
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default Register