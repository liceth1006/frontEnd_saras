import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NavbarBeneficiary from "../Beneficiary/NavbarBeneficiary";
import Projects from "../../pages/Beneficiary/Projects";
import Form from "../../pages/Beneficiary/Form";
import FormEnvironmentalManagement from "../../components/Beneficiary/FormEnvironmentalManagement";
import NotFound from "../../pages/NotFound";
import FormCapitalProject from "../../pages/Beneficiary/FormCapitalProject";

const BeneficiaryLayout = () => {
  const { itemName } = useParams();

  let Component;
  switch (itemName) {
    case "Mis proyectos":
      Component = Projects;
      break;
    case "Formulario inversión":
      Component = Form;
      break;
    case "Formulario Capital de Trabajo":
      Component = FormCapitalProject;
      break;
    case "Documentos":
      Component = FormEnvironmentalManagement;
      break;
    case "Instructivo":
      Component = FormEnvironmentalManagement;
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
