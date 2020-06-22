import React, { useReducer } from "react";
import uuid from "uuid";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";

import { ADD_PROFILE, DELETE_PROFILE } from "../types";

const ProfileState = props => {
  const initialState = {
    profiles: [
      {
        id: 1,
        firstName: "Daniel",
        lastName: "Lewis",
        job: "Growth Developer",
        email: "daniel.d.lewis@gmail.com"
      },
      {
        id: 2,
        firstName: "Andrea",
        lastName: "Simmons",
        job: "Marketing Manager",
        email: "an.simmons@gmail.com"
      }
    ]
  };
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const addProfile = profile => {
    profile.id = uuid.v4();
    dispatch({ type: "ADD_PROFILE", payload: profile });
  };
  const deleteProfile = id => {
    dispatch({ type: "DELETE_PROFILE", payload: id });
  };

  return (
    <ProfileContext.Provider
      value={{ profiles: state.profiles, addProfile, deleteProfile }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
