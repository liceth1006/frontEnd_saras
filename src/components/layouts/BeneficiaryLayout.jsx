import PropTypes from "prop-types";
import NavbarBeneficiary from "../Beneficiary/NavbarBeneficiary";


const BeneficiaryLayout = ({ children }) => {
  return (
    <div>
     <NavbarBeneficiary></NavbarBeneficiary>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 bg-red-400 border-dashed rounded-lg dark:border-gray-700">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

BeneficiaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BeneficiaryLayout;
