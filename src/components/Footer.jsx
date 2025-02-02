// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="copyright">
          <p>
            © {new Date().getFullYear()} GEOFFREY OMONDI. All rights reserved.
          </p>
        </div>
        <div className="social-links">
          <a href="https://github.com/elducati" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/jeff-omondi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <Link
          to="lead"
          spy={true}
          smooth={true}
          duration={500}
          className="back-to-top"
        >
          ↑ Back to Top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;