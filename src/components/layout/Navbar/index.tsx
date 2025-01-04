import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';
import MobileMenu from './MobileMenu';

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        EduTuition
      </Link>
      <NavLinks links={links} />
      <AuthButtons />
      <MobileMenu links={links} />
    </div>
  </nav>
);

export default Navbar;