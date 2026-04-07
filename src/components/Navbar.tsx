import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  theme?: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'dark' }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Demos', path: '/demos' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/' },
    { name: 'Blog', path: '/journal' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <nav className={`fixed top-0 w-full z-50 ${isDark ? 'glass-nav' : 'bg-stone-50/80 backdrop-blur-xl'} shadow-sm transition-all duration-500 ease-in-out`}>
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className={`font-serif text-2xl uppercase tracking-widest ${isDark ? 'text-stone-50' : 'text-stone-900'}`}>
          The Modern Atelier
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-serif text-lg tracking-tight transition-all duration-500 ${
                  isActive
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                    : `${isDark ? 'text-stone-400' : 'text-stone-600'} hover:text-orange-500`
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <button className={`material-symbols-outlined ${isDark ? 'text-stone-50' : 'text-orange-700'} hover:scale-95 duration-200`}>
            search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
