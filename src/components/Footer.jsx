// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="text-center">
          <p>
            © {new Date().getFullYear()} GEOFFREY OMONDI. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/elducati" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/jeff-omondi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
        <Link
          to="lead"
          spy={true}
          smooth={true}
          duration={500}
          className="text-gray-400 hover:text-white cursor-pointer"
        >
          ↑ Back to Top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;