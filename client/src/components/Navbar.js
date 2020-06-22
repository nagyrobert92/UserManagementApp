import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-wrap bg-blue-500 p-6 shadow-md">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <span className="font-bold text-xl">DaUsa</span>
      </div>

      <ul>
        <li>
          <Link
            to="/"
            className="block mt-4 sm:mt-0 text-black-500 hover:text-white mr-6"
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
