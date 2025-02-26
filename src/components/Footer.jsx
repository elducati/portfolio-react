// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-b from-gray-900 to-black text-gray-300 transition-colors duration-300">
      <div className="container mx-auto flex flex-col items-center space-y-6 px-4">
        <div className="text-center">
          <p className="text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300">
            © {new Date().getFullYear()} GEOFFREY OMONDI. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a 
            href="https://github.com/elducati" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a 
            href="https://linkedin.com/jeff-omondi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
        <Link
          to="lead"
          spy={true}
          smooth={true}
          duration={500}
          className="group flex items-center text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
        >
          <span className="mr-2 group-hover:-translate-y-1 transition-transform duration-300">↑</span>
          Back to Top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;