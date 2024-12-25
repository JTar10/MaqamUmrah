import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import instagram from "../assets/instagram.png";

const Navbar = () => {
  return (
    <nav className="bg-gold text-black p-4 ">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center mr-4">
          <img
            src={logo}
            alt="Maqam Umrah Logo"
            className="w-16 h-16 rounded-full"
          />
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/maqamumrah/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:bg-white rounded-xl transition duration-200 p-2"
          >
            <img
              src={instagram}
              alt="Maqam Umrah Instagram"
              className="w-12 h-12"
            />
          </a>
        </div>

        {/* Navbar Links */}
        <ul className="flex flex-wrap flex-1 space-x-4 lg:space-x-6 justify-end">
          <li className="mb-2 lg:mb-0">
            <Link
              to="/"
              className="p-2 hover:bg-white rounded transition duration-200"
            >
              Home
            </Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link
              to="/packages"
              className="p-2 hover:bg-white rounded transition duration-200"
            >
              Packages
            </Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link
              to="/gallery"
              className="p-2 hover:bg-white rounded transition duration-200"
            >
              Gallery
            </Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link
              to="/reviews"
              className="p-2 hover:bg-white rounded transition duration-200"
            >
              Reviews
            </Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link
              to="/about"
              className="p-2 hover:bg-white rounded transition duration-200"
            >
              About Us
            </Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link
              to="/faqs"
              className="p-2 hover:bg-white rounded transition duration-200"
            >
              FAQs
            </Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link
              to="/contact"
              className="p-2 hover:bg-white rounded transition duration-200"
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
