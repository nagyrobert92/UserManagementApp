import React, { Fragment, useContext } from "react";
import ProfileItem from "./ProfileItem";
import ProfileContext from "../context/profile/profileContext";

const Profiles = () => {
  const profileContext = useContext(ProfileContext);
  const { profiles, filtered } = profileContext;
  if (profiles.length === 0) {
    return <h4>Please add profile</h4>;
  }
  return (
    <div>
      <Fragment>
        {filtered !== null
          ? filtered.map(profile => (
              <ProfileItem key={profile.id} profile={profile} />
            ))
          : profiles.map(profile => (
              <ProfileItem key={profile.id} profile={profile} />
            ))}
      </Fragment>
    </div>
  );
};

export default Profiles;
