import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../kisso-dev.png";
import AuthContext from '../context/auth/authContext';
import ProfileContext from "../context/profile/profileContext"

const Navbar = ({title, icon}) => {
    const authContext = useContext(AuthContext)
    const profileContext = useContext(ProfileContext);
    const {isAuthenticated, logout, user} = authContext
    const { clearProfiles } = profileContext;

    const onLogout = () => {
        logout()
        clearProfiles()
    };
    const authLinks = (
        <Fragment>
            <li>Hello {user && user.firstName}</li>
            <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
        <li>
          <Link
            to="/register"
            className="text-sm px-3 mr-10 bg-white border rounded text-black border-white hover:border-transparent hover:text-white hover:bg-orange-500 "
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-sm px-4  bg-white border rounded text-black border-white hover:border-transparent hover:text-white hover:bg-orange-500"
          >
            Login
          </Link>
        </li>
        </Fragment>
      );
  return (
    <div className="flex items-center justify-between flex-wrap bg-green-400 p-6">

      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <img src={logo} alt="" className="h-10 w-10" />

        <span className="font-extrabold text-xl ml-2">DaUsa</span>
      </div>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
