import React, { useState } from 'react';
import { Logo } from './Icons';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Cursos', href: '#cursos-nav' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="bg-secondary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#inicio" 
          className="flex items-center justify-center hover:opacity-90 transition duration-300 transform hover:scale-105 group"
        >
          <Logo width={50} height={50} className="shadow-lg rounded-full" />
          <span className="ml-3 font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors">
            Lexigo
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent transition duration-300 font-medium text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-accent focus:outline-none"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-800 animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};