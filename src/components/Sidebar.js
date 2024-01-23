// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 h-screen w-64 fixed">
      <div className="flex items-center justify-center mt-6">
        <span className="text-white text-2xl font-semibold">SpaceVue</span>
      </div>
      <ul className="mt-8 text-center">
        <li className="mb-4 ">
          <Link
            to="/dashboard"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Dashboard
          </Link>
        </li>

        <li className="mb-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
