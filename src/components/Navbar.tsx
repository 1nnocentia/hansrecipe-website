import React, { useState } from 'react';
import { THEME } from '../config/theme';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Koleksi', href: '#products' },
    { name: 'Manfaat', href: '#benefits' },
    { name: 'Tentang Kami', href: '#about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-earth/80 backdrop-blur-md border-b border-gray-100">
      <div className={THEME.spacing.container}>
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif font-bold tracking-tight text-sage">Han's Recipe</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-sage font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#products" className="bg-sage text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              Pesan Sekarang
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-sage focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-600 hover:text-sage font-medium transition-colors px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#products" 
                className="bg-sage text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity mx-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
