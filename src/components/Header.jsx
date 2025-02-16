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
    <header className={`app-header ${menuOpen ? 'active' : ''} bg-gray-800 text-white`}>
      <div className="mobile-menu-toggle flex items-center justify-between p-4">
        <button 
          className="text-2xl" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <nav className={`main-nav ${menuOpen ? 'active' : ''} ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center`}>
        <ul className="flex flex-col md:flex-row md:space-x-6">
          {navItems.map(item => (
            <li key={item.id} className="my-2 md:my-0">
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-gray-400"
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