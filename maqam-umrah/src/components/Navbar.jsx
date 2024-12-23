import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
        <img
          src={logo}
          alt="Maqam Umrah Logo"
          className="w-16 h-16"
        /></div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/packages"
              className="hover:text-blue-900 transition duration-200"
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="hover:text-blue-900 transition duration-200"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-900 transition duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className="hover:text-blue-900 transition duration-200"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-900 transition duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
