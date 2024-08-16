
import { HiOutlineLogin } from "react-icons/hi";
import Img1 from '../../assets/images/img1.jpg'
import { NavLink } from "react-router-dom";
import FormRegister from "../../components/Auth/FormRegister";
function Register (){
  return(
    <>
     <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div 
           style={{
            backgroundImage:
              `url(${Img1})`,
          }}
          className="flex-1 bg-cover bg-center bg-no-repeat rounded-l-lg text-center hidden lg:flex">
           
          </div>
          <div className="lg:w-5/6 xl:w-5/6 p-6 sm:p-12">
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