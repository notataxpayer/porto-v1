import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1745634778/porto%20commerce%20web-v1/logo-nobg_lzhhbj.png"
                alt="Logo"
                className="h-8 w-auto select-none"
              />
              <span className="ml-2 text-xl font-bold text-purple-800">Freelans</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-purple-700 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/#" 
              className="text-purple-700 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
              to="/#" 
              className="text-purple-700 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-500"
            >
              About
            </Link>
            <Link 
              to="/#" 
              className=" text-purple-700 hover-glow px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-all duration-300 shadow-md hover:shadow-purple-500/30"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-700 hover:text-purple-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-purple-700 hover:text-purple-900 hover:bg-purple-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-base font-medium text-purple-700 hover:text-purple-900 hover:bg-purple-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-purple-700 hover:text-purple-900 hover:bg-purple-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-purple-700 hover:text-purple-900 hover:bg-purple-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;