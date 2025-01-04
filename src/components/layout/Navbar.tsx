import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          KYP
        </Link>

        {/* Hamburger Menu */}
        <button
          className="text-3xl lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Menu Items */}
        <div
          className={`lg:flex lg:items-center lg:space-x-8 transition-transform duration-300 transform lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static fixed left-0 top-16 w-full bg-gradient-to-r from-blue-600 to-indigo-600 lg:bg-transparent lg:w-auto lg:p-0 p-6 lg:space-y-0 space-y-4`}
        >
          <Link
            to="/"
            className="block text-lg font-medium hover:text-yellow-300 transition"
            onClick={closeMenu} // Close the menu when clicked
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="block text-lg font-medium hover:text-yellow-300 transition"
            onClick={closeMenu} // Close the menu when clicked
          >
            Courses
          </Link>
          <Link
            to="/practice"
            className="block text-lg font-medium hover:text-yellow-300 transition"
            onClick={closeMenu} // Close the menu when clicked
          >
            Practice
          </Link>
          <Link
            to="/about"
            className="block text-lg font-medium hover:text-yellow-300 transition"
            onClick={closeMenu} // Close the menu when clicked
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-lg font-medium hover:text-yellow-300 transition"
            onClick={closeMenu} // Close the menu when clicked
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
