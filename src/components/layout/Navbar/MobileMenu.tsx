import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  links: Array<{ to: string; label: string }>;
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-2 px-4 space-y-2">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <button className="w-full py-2 px-4 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
              Sign In
            </button>
            <button className="w-full py-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;