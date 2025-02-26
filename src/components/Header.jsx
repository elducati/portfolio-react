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
    <header className={`fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg transition-all duration-300 ${menuOpen ? 'shadow-xl' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="mobile-menu-toggle md:hidden">
            <button 
              className="text-3xl p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
          <nav className={`${
            menuOpen 
              ? 'absolute top-full left-0 w-full bg-gray-900 shadow-lg' 
              : 'hidden'
          } md:flex md:items-center md:justify-center transition-all duration-300`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
              {navItems.map(item => (
                <li key={item.id} className="my-2 md:my-0">
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 px-4 md:px-2 text-sm font-medium uppercase tracking-wide relative group cursor-pointer"
                  >
                    <span className="relative z-10 group-hover:text-indigo-400 transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;