import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../components/CommonUI/Button";

const NotFound = ({ path }) => {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-black dark:text-white">
      <div className="flex items-center justify-center min-h-screen px-2">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-2xl font-medium mt-4">Oops! Page not found</p>
          <p className="mt-4 mb-8">
            The page youe looking for doesnt exist or has been moved.
          </p>
          <Link to={path}>
            <Button className="bg-btn-secondary-color hover:bg-btn-primary-hover hover:text-white">
              <i className="fa-solid fa-arrow-left-long"></i>
              <span className="ml-2">pagina INicio</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
NotFound.propTypes = {
  path: PropTypes.string.isRequired,
};
export default NotFound;
