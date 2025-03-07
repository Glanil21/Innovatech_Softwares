import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-800">
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-[60px] w-[60px] mr-4" src={logo} alt="logo" />
          <span className="text-2xl font-bold tracking-tight">InnovaTech Software</span>
        </div>

        {/* Centered Navigation Items */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="hidden lg:flex space-x-12">
            <li>
              <a href="#features" className="hover:text-green-500">
                Features
              </a>
            </li>
            <li>
              <a href="#workflow" className="hover:text-green-500">
                Workflow
              </a>
            </li>
            <li>
              <Link to="/projects" className="hover:text-green-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-green-500">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-green-500 to-green-900 py-2 px-3 rounded-md text-white font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar}>{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            <li className="py-4">
              <a href="#features" className="hover:text-green-500">
                Features
              </a>
            </li>
            <li className="py-4">
              <a href="#workflow" className="hover:text-green-500">
                Workflow
              </a>
            </li>
            <li className="py-4">
              <Link to="/projects" className="hover:text-green-500">
                Projects
              </Link>
            </li>
            <li className="py-4">
              <Link to="/testimonials" className="hover:text-green-500">
                Testimonials
              </Link>
            </li>
          </ul>
          <div className="flex space-x-6 mt-4">
            <Link to="#" className="py-2 px-3 border rounded-md">
              Sign In
            </Link>
            <Link
              to="#"
              className="py-2 px-3 border rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white font-semibold"
            >
              Create an account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
