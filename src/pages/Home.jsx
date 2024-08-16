import Logo from "../components/CommonUI/Logo";
import Img3 from '../assets/images/img3.jpg'
import { NavLink } from "react-router-dom";
import { FiUserCheck } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
import Button from "../components/CommonUI/Button";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div
          style={{
            backgroundImage:
              `url(${Img3})`,
          }}
          className="flex-1  bg-cover bg-center bg-no-repeat rounded-l-lg text-center hidden lg:flex">
         
          </div>
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
            <div>
            <Logo title="EcoGestión" slogan="Solución Integral para la Gestión de SARAS" />
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
                    <Button className= "border-2 border-btn-primary-hover hover:bg-btn-primary-hover hover:text-white">
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
