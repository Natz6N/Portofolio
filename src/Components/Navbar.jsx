import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-4xl font-bold font-logo  transition-colors duration-300">
              Natz
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
              Contact
            </Link>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              Login
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <div className="pt-4 pb-3 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300" onClick={toggleMenu}>
              Contact
            </Link>
            <button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300" onClick={toggleMenu}>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;  