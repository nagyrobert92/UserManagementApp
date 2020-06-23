import React, { useContext } from "react";
import ProfileContext from "../context/profile/profileContext";

const ProfileItem = ({ profile }) => {
  const profileContext = useContext(ProfileContext);
  const { deleteProfile, setCurrent, clearCurrent} = profileContext;
  const { _id, firstName, lastName, email, job } = profile;
  const onDelete = () => {
    deleteProfile(_id);
    clearCurrent();
  };
  return (
    <div className="bg-gray-100  max-w-sm rounded overflow-hidden shadow-lg m-4">
      <h3 className="px-6 py-4 text-center">
        {firstName} {lastName}
      </h3>
      <h5 className="text-center bg-orange-300">
        <i className="fas fa-briefcase" /> {job}
      </h5>
      <h5 className="text-center">
        <i className="fas fa-envelope-open" /> {email}
      </h5>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default ProfileItem;
