
import PropTypes from 'prop-types';
import Footer from '../Footer';

const AuthLayout = ({ children }) => {
  return (
    <div>  
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;
