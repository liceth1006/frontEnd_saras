import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NavbarBeneficiary from "../Beneficiary/NavbarBeneficiary";
import Dashboard from "../../pages/Beneficiary/Dashboard";
import Projects from "../../pages/Beneficiary/Projects";
import Form from "../../pages/Beneficiary/Form";
import NotFound from "../../pages/NotFound";

const BeneficiaryLayout = () => {
  const { itemName } = useParams();

  let Component;
  switch (itemName) {
    case "Dashboard":
      Component = Dashboard;
      break;
    case "Proyectos":
      Component = Projects;
      break;
      case "Formulario":
      Component = Form;
      break;
    default:
      // eslint-disable-next-line react/display-name
      Component = () => <NotFound path="/beneficiary/Dashboard" />;
   
  }

  return (
    <div>
      <NavbarBeneficiary />
      <div className="p-4 sm:ml-64">
        <div className=" border-2 bg-red-400 border-dashed rounded-lg dark:border-gray-700">
          <main>
            <Component />
          </main>
        </div>
      </div>
    </div>
  );
};

BeneficiaryLayout.propTypes = {
  children: PropTypes.node,
};

export default BeneficiaryLayout;
