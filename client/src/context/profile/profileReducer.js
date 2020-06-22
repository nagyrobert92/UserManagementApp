import { ADD_PROFILE, DELETE_PROFILE } from "../types";

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
    default:
      return state;
  }
};
