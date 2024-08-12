import PropTypes from "prop-types";


const Profile = ({ image, name, email,lastname }) => {
  return (
    <div className="flex flex-col items-center mt-6 -mx-2 mb-6">
      <img
        className="object-cover w-24 h-24 mx-2 rounded-full"
        src={image}
        alt="avatar"
      ></img>
      <h4 className="mx-2 mt-2 font-medium text-gray-800 ">{name} {lastname}</h4>
      <p className="mx-2 mt-1 text-sm font-medium text-gray-600 ">{email}</p>
      {}
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Profile;
