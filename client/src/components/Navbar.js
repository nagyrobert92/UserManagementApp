import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-wrap bg-blue-200 p-6">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <span class="font-bold text-xl">DaUsa</span>
      </div>

      <ul>
        <li>
          <Link>
            <Link
              to="/"
              className="block mt-4 sm:mt-0 text-black-500 hover:text-white mr-6"
            >
              Home
            </Link>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
