import React from "react";
import Profiles from "../components/Profiles";
import ContactForm from "./ProfileForm";

const Home = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/3 ml-auto">
        <ContactForm />
      </div>
      <div className="w-1/3 ml-auto ">
        <Profiles />
      </div>
    </div>
  );
};

export default Home;
