import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  theme?: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`${isDark ? 'bg-stone-950 text-stone-500' : 'bg-stone-100 text-stone-500'} py-24`}>
      <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className={`font-serif font-bold ${isDark ? 'text-stone-50' : 'text-stone-900'} text-2xl mb-6`}>
            The Modern Atelier
          </div>
          <p className="text-sm leading-relaxed">
            A curated studio for the discerning eye. Specializing in high-end interiors and architectural branding.
          </p>
        </div>
        <div>
          <h4 className={`font-label text-xs uppercase tracking-[0.2em] ${isDark ? 'text-stone-300' : 'text-orange-700'} mb-8 font-bold`}>Services</h4>
          <ul className="space-y-4 font-sans text-sm uppercase tracking-wider">
            <li><Link className="hover:text-orange-400 transition-colors" to="/services">Award-winning Solutions</Link></li>
            <li><Link className="hover:text-orange-400 transition-colors" to="/services">Exclusive 10 year warranty</Link></li>
            <li><Link className="hover:text-orange-400 transition-colors" to="/projects">Modern interior projects</Link></li>
            <li><Link className="hover:text-orange-400 transition-colors" to="/contact">Get a personal estimate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={`font-label text-xs uppercase tracking-[0.2em] ${isDark ? 'text-stone-300' : 'text-orange-700'} mb-8 font-bold`}>Navigation</h4>
          <ul className="space-y-4 font-sans text-sm uppercase tracking-wider">
            <li><Link className="hover:text-orange-400 transition-colors" to="/projects">Portfolio</Link></li>
            <li><Link className="hover:text-orange-400 transition-colors" to="/">About</Link></li>
            <li><Link className="hover:text-orange-400 transition-colors" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-orange-400 transition-colors" to="/journal">Journal</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={`font-label text-xs uppercase tracking-[0.2em] ${isDark ? 'text-stone-300' : 'text-orange-700'} mb-8 font-bold`}>Connect</h4>
          <div className="flex gap-4">
            <a className={`w-10 h-10 rounded-full border ${isDark ? 'border-stone-800' : 'border-stone-300'} flex items-center justify-center hover:border-primary transition-all`} href="#">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className={`w-10 h-10 rounded-full border ${isDark ? 'border-stone-800' : 'border-stone-300'} flex items-center justify-center hover:border-primary transition-all`} href="#">
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
          </div>
          <p className="mt-8 text-xs">© 2024 The Modern Atelier. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
