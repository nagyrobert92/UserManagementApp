import React, { useState, useContext } from "react";
import ProfileContext from "../context/profile/profileContext";

export const ProfileForm = () => {
  const profileContext = useContext(ProfileContext);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: ""
  });
  const { firstName, lastName, email, job } = profile;
  const onChange = e =>
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  const onSubmit = e => {
    e.preventDefault();
    profileContext.addProfile(profile);
    setProfile({
      firstName: "",
      lastName: "",
      email: "",
      job: ""
    });
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col text-center  mt-5">
      <h2>Add Profile</h2>
      <input
        className="bg-gray-200 mt-5"
        type="text"
        placeholder="firstname"
        name="firstName"
        value={firstName}
        onChange={onChange}
      />
      <input
        className="bg-gray-200 mt-5"
        type="text"
        placeholder="lastName"
        name="lastName"
        value={lastName}
        onChange={onChange}
      />
      <input
        className="bg-gray-200 mt-5"
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        className="bg-gray-200 mt-5"
        type="text"
        placeholder="job"
        name="job"
        value={job}
        onChange={onChange}
      />
      <div className="mt-5">
        <input type="submit" value="Create User" />
      </div>
    </form>
  );
};

export default ProfileForm;
