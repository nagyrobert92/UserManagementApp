import React from "react";
import Profiles from "../components/Profiles";
import ProfileForm from "./ProfileForm";
import ProfileFilter from "./ProfileFilter";

const Home = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/3 ml-auto">
        <ProfileForm />
      </div>
      <div className="w-1/3 ml-auto ">
        <div className="mt-5">
          <ProfileFilter />
        </div>
        <Profiles />
      </div>
    </div>
  );
};

export default Home;
