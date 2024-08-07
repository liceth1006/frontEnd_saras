import PropTypes from 'prop-types';

const BeneficiaryLayout = ({ children }) => {
  return (
    <div>
      <header>Beneficiary Header</header>
      <main>{children}</main>
      <footer>Beneficiary Footer</footer>
    </div>
  );
};

BeneficiaryLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default BeneficiaryLayout;

