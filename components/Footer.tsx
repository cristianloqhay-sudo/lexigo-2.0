import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-xl">Lexigo</span>
        </div>
        <div className="text-sm text-gray-400">
          &copy; {currentYear} Lexigo. Todos los derechos reservados.
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          Aprender idiomas nunca fue tan fácil.
        </div>
      </div>
    </footer>
  );
};