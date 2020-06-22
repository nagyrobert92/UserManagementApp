import React, { useContext, useRef, useEffect } from "react";
import ProfileContext from "../context/profile/profileContext";

const ProfileFilter = () => {
  const profileContext = useContext(ProfileContext);
  const text = useRef("");
  const { filterProfile, clearFilter, filtered } = profileContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = e => {
    if (text.current.value !== "") {
      filterProfile(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          ref={text}
          placeholder="Filter Users..."
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ProfileFilter;
