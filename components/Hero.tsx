import React from 'react';
import { Logo } from './Icons';

interface EbookButtonProps {
  href: string;
  emoji: string;
  label: string;
}

const EbookButton: React.FC<EbookButtonProps> = ({ href, emoji, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="animate-heartbeat hover-pause group bg-primary hover:bg-primary/80 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center space-x-3 w-full sm:w-auto transition-colors duration-300"
  >
    <span className="text-2xl">{emoji}</span>
    <span>{label}</span>
  </a>
);

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-secondary rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
        <div className="px-6 py-16 lg:py-24 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-full text-center">
            {/* Large Logo */}
            <div className="mb-8 flex justify-center">
              <Logo width={120} height={120} className="shadow-2xl rounded-full border-4 border-gray-700" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Domina Nuevos <span className="text-primary">Idiomas</span> con Lexigo
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ofrecemos cursos online de alta calidad para que aprendas Inglés, Portugués e Italiano desde cero y a tu propio ritmo. ¡Tu fluidez comienza aquí!
            </p>

            {/* Free Ebooks Section */}
            <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto border border-primary/50">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Elige tu idioma y empieza hoy mismo, ¡es totalmente <span className="text-accent">GRATIS</span>!
              </h3>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                <EbookButton
                  href="https://cristianloqhay-sudo.github.io/curso-de-ingles/"
                  emoji="🇺🇸"
                  label="Inglés"
                />
                <EbookButton
                  href="https://cristianloqhay-sudo.github.io/curso-de-portugues-4/"
                  emoji="🇧🇷"
                  label="Portugués"
                />
                <EbookButton
                  href="https://cristianloqhay-sudo.github.io/italiano/"
                  emoji="🇮🇹"
                  label="Italiano"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};