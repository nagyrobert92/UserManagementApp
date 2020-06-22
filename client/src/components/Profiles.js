import React, { Fragment, useContext } from "react";
import ProfileItem from "./ProfileItem";
import ProfileContext from "../context/profile/profileContext";

const Profiles = () => {
  const profileContext = useContext(ProfileContext);
  const { profiles } = profileContext;
  return (
    <div>
      <Fragment>
        {profiles.map(profile => (
          <ProfileItem key={profile.id} profile={profile} />
        ))}
      </Fragment>
    </div>
  );
};

export default Profiles;
