import { Link } from 'react-router-dom';

interface NavLinksProps {
  links: Array<{ to: string; label: string }>;
}

const NavLinks = ({ links }: NavLinksProps) => (
  <div className="hidden md:flex space-x-6">
    {links.map(({ to, label }) => (
      <Link
        key={to}
        to={to}
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        {label}
      </Link>
    ))}
  </div>
);

export default NavLinks;