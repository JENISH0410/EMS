import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <NavLink className="text-2xl font-bold text-white" to="/">EMS</NavLink>

          <nav className="hidden md:flex gap-8 text-white text-md font-medium">
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                `hover:text-blue-200 transition duration-200 ${
                  isActive ? "underline font-semibold" : ""
                }`
              }
            >
              Employees
            </NavLink>
            <NavLink
              to="/create-team"
              className={({ isActive }) =>
                `hover:text-blue-200 transition duration-200 ${
                  isActive ? "underline font-semibold" : ""
                }`
              }
            >
              Create Team
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-200 transition duration-200 ${
                  isActive ? "underline font-semibold" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex gap-3">
            <NavLink
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200 text-sm sm:text-base"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 transition duration-200 text-sm sm:text-base"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
