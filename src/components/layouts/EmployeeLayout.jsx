import NavbarEmployee from "../Employee/NavbarEmployee";
import PropTypes from "prop-types";
import FormFaras from '../Employee/FormFaras'
import NotFound from "../../pages/NotFound";
import { useParams } from "react-router-dom";

const EmployeeLayout=()=>{
const { itemName } = useParams();

let Component;
switch (itemName) {
  case "Formulario":
    Component = FormFaras;
    break;
 

  default:
    // eslint-disable-next-line react/display-name
    Component = () => <NotFound path="/employee/formulario"/>;
}
return (
  <div>
    <NavbarEmployee />
    <div className="sm:ml-64">
      <main>
        <Component />
      </main>
    </div>
  </div>
);
};

EmployeeLayout.propTypes = {
children: PropTypes.node,
};

export default EmployeeLayout;
