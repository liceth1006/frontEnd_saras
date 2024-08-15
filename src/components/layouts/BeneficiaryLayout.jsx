import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NavbarBeneficiary from "../Beneficiary/NavbarBeneficiary";
import Projects from "../../pages/Beneficiary/Projects";
import Form from "../../pages/Beneficiary/Form";
import FormEnvironmentalManagement from '../../components/Beneficiary/FormEnvironmentalManagement'
import FormInvestmentProject from '../../components/Beneficiary/FormInvestment'
import Questions from "../../pages/Beneficiary/Questions";
import NotFound from "../../pages/NotFound";

const BeneficiaryLayout = () => {
  const { itemName } = useParams();

  let Component;
  switch (itemName) {
    case "Mis proyectos":
      Component = Projects;
      break;
    case "formulario inversión":
      Component = Form;
      break;
      case "Información del proyecto o inversión":
        Component = FormInvestmentProject;
        break;
      case "Gestión ambiental y social":
        Component = FormEnvironmentalManagement;
        break;
    case "proyecto o inversión":
      Component = Questions;
      break;
    case "Capital De Trabajo":
      Component = Form;
      break;
    default:
      // eslint-disable-next-line react/display-name
      Component = () => <NotFound path="/beneficiary/Dashboard" />;
  }

  return (
    <div>
      <NavbarBeneficiary />
      <div className="sm:ml-64">
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
