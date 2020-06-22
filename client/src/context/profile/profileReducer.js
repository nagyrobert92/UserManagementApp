import {
  ADD_PROFILE,
  DELETE_PROFILE,
  FILTER_PROFILE,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload]
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          profile => profile.id !== action.payload
        )
      };
    case FILTER_PROFILE:
      return {
        ...state,
        filtered: state.profiles.filter(profile => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return profile.firstName.match(regex) || profile.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
