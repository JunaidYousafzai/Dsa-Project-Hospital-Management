import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 my-2 flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
          <span>Hospital</span>
          <span className="text-green-400">Management</span>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex space-x-6 text-white font-medium">
        <nav className="hidden lg:flex space-x-6 text-white font-medium">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold"
                : "text-black hover:text-gray-700 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/patients"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold"
                : "text-black hover:text-gray-700 transition"
            }
          >
            Patients
          </NavLink>
          <NavLink
            to="/add-patient"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold"
                : "text-black hover:text-gray-700 transition"
            }
          >
            Add Patient
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold"
                : "text-black hover:text-gray-700 transition"
            }
          >
            About
          </NavLink>
</nav>

        </nav>

        <div className="hidden lg:block">
          <button className="bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-500">
            Login
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-blue-600 text-white py-4`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold"
                : "text-black hover:text-gray-700 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/patients"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold"
                : "text-black hover:text-gray-700 transition"
            }
          >
            Patients
          </NavLink>
          <NavLink
            to="/add-patient"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold"
                : "text-black hover:text-gray-700 transition"
            }
          >
            Add Patient
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold"
                : "text-black hover:text-gray-700 transition"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
