import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <header>Auth Header</header>
      <main>{children}</main>
      <footer>Auth Footer</footer>
    </div>
  );
};
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;
