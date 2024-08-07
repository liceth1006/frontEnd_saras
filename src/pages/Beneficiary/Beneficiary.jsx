import Navbar from "../../components/Navbar";
import MenuIcon from '../../components/Navbar/IconHamburger/MenuIcon'
import Logo from "../../components/CommonUI/Logo";
import Profile from "../../components/Profile";
const Beneficiary = () => {
  return (
    <>
   <MenuIcon/>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-900 dark:bg-gray-800">
          <div className="h-full px-3 py-4  bg-blue-900 dark:bg-gray-800 mb-6">
            <Logo title="SARAS" />
            <Profile />
            <Navbar></Navbar>
          </div>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          gggg
        </div>
      </div>
    </>
  );
};

export default Beneficiary;
