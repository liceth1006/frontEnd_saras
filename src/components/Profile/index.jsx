const Profile = ({ image, name, email }) => {
  return (
    <div className="flex flex-col items-center mt-6 -mx-2 mb-6">
      <img
        className="object-cover w-24 h-24 mx-2 rounded-full"
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        alt="avatar"
      ></img>
      <h4 className="mx-2 mt-2 font-medium text-gray-800 ">
        John Doe
      </h4>
      <p className="mx-2 mt-1 text-sm font-medium text-gray-600 ">
        john@example.com
      </p>
    </div>
  );
};

export default Profile;
