import FormLogin from "../../components/Auth/FormLogin";
import Img2 from '../../assets/images/img2.jpg'
import { HiOutlineLogin } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div style={{
                backgroundImage:
                  `url(${Img2})`,
              }}
          className="flex-1  bg-cover bg-center bg-no-repeat rounded-l-lg text-center hidden lg:flex">
           
          </div>
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
          <NavLink to="/">
          <HiOutlineLogin className="text-3xl" />
          </NavLink>
              <FormLogin></FormLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
