// components/Header.jsx
import { Link } from 'react-scroll';

const Header = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`app-header ${menuOpen ? 'active' : ''}`}>
      <div className="mobile-menu-toggle">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;