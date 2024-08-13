import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NavbarBeneficiary from "../Beneficiary/NavbarBeneficiary";
import Dashboard from "../../pages/Beneficiary/Dashboard";
import Projects from "../../pages/Beneficiary/Projects";
import Form from "../../pages/Beneficiary/Form";
import Questions from "../../pages/Beneficiary/Questions"
import NotFound from "../../pages/NotFound";

const BeneficiaryLayout = () => {
  const { itemName } = useParams();

  let Component;
  switch (itemName) {
    case "Dashboard":
      Component = Dashboard;
      break;
    case  "Información del beneficiario":
      Component = Projects;
      break;
      case "Formulario":
      Component = Form;
      break;
      case "Formularios":
        Component = Questions;
        break;
    default:
      // eslint-disable-next-line react/display-name
      Component = () => <NotFound path="/beneficiary/Dashboard" />;
   
  }

  return (
    <div>
      <NavbarBeneficiary />
      <div className="p-4 sm:ml-64">
          <main>
            <Component />
          </main>
        </div>
      </div>
  );
};

BeneficiaryLayout.propTypes = {
  children: PropTypes.node,
};

export default BeneficiaryLayout;
