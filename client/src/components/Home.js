import React, {useContext, useEffect} from "react";
import Profiles from "../components/Profiles";
import ProfileForm from "./ProfileForm";
import ProfileFilter from "./ProfileFilter";
import AuthContext from "../context/auth/authContext"

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);
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
