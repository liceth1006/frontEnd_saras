import Logo from "../components/CommonUI/Logo";
import { NavLink } from "react-router-dom";
import { FiUserCheck } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
import Button from "../components/CommonUI/Button";
function Home() {
  return (
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
            <div>
              <Logo />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <div className="mt-1 ">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  ">
                    Si ya usas SARAS:
                  </div>
                </div>

                <div className="mx-auto ">
                  <NavLink to="/login">
                    <Button className="bg-btn-primary-color  hover:bg-btn-primary-hover hover:text-white ">
                      <FiUserCheck className="mr-2" />
                      <span className="ml-">Inicia Sesión</span>
                    </Button>
                  </NavLink>
                </div>

                <div className="mt-10  ">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  ">
                    Si es tu primera vez usando SARAS:
                  </div>
                </div>

                <div className="mx-auto ">
                  <NavLink to="/register">
                    <Button className= "bg-btn-secondary-color hover:bg-btn-primary-hover hover:text-white">
                      <LuUserPlus className="mr-2" />
                      <span className="ml-">Crea una cuenta</span>
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
