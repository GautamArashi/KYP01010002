import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 ">KYP01010002</h3>
            <p>Computer Training & Skill Development</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/practice">Practice Tests</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Email: info@edutuition.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: Urdu Bazar Bhagalpur</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-blue-400"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} KYP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;