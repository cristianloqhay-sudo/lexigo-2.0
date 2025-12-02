import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-primary to-fuchsia-600 text-white rounded-3xl shadow-2xl p-8 sm:p-16 text-center transform hover:scale-[1.01] transition duration-500">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          ¡Tu Viaje Lingüístico Comienza Hoy!
        </h2>
        <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
          No esperes más para dominar un nuevo idioma. Síguenos en nuestras redes sociales para recibir tips diarios, frases útiles y ofertas exclusivas.
        </p>

        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://www.facebook.com/profile.php?id=61583705050960"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white text-white hover:text-secondary p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-8 h-8" />
          </a>

          <a
            href="https://www.instagram.com/lexigo2.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white text-white hover:text-accent p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-8 h-8" />
          </a>

          <a
            href="https://www.tiktok.com/@lexigo2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white text-white hover:text-secondary p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            aria-label="TikTok"
          >
            <TikTokIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};