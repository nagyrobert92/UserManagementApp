import React, { useReducer } from "react";
import axios from 'axios';
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";

import {
  GET_PROFILES,
  ADD_PROFILE,
  DELETE_PROFILE,
  UPDATE_PROFILE,
  FILTER_PROFILES,
  CLEAR_PROFILES,
  CLEAR_FILTER,
  PROFILE_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from "../types";

const ProfileState = props => {
  const initialState = {
    profiles: null,
    current: null,
    filtered: null,
    error: null
    
  };
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const getProfiles = async () => {
    try {
      const res = await axios.get('/profiles');

      dispatch({
        type: GET_PROFILES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };

  const addProfile = async profile => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/profiles', profile, config);

      dispatch({
        type: ADD_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };

  const deleteProfile = async id => {
    try {
      await axios.delete(`/profiles/${id}`);

      dispatch({
        type: DELETE_PROFILE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };
  
  const updateProfile = async profile => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/profiles/${profile._id}`,
        profile,
        config
      );

      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };

  const clearProfiles = () => {
    dispatch({ type: CLEAR_PROFILES });
  };

  const setCurrent = profile => {
    dispatch({ type: SET_CURRENT, payload: profile });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const filterProfile = text => {
    dispatch({ type: FILTER_PROFILES, payload: text });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles: state.profiles,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addProfile,
        deleteProfile,
        updateProfile,
        setCurrent,
        clearCurrent,
        getProfiles,
        filterProfile,
        clearFilter,
        clearProfiles
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
