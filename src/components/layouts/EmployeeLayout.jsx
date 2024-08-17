import NavbarEmployee from "../Employee/NavbarEmployee";

const EmployeeLayout=()=>{
const { itemName } = useParams();

/*let Component;
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
}*/

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


EmployeeLayout.propTypes = {
children: PropTypes.node,
};
};
export default EmployeeLayout;