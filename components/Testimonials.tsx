import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  course: string;
  imgSrc: string;
  quoteColorClass: string;
  borderColorClass: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, course, imgSrc, quoteColorClass, borderColorClass }) => (
  <div className={`bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 ${borderColorClass} hover:shadow-xl transition duration-300 text-white`}>
    <div className={`text-4xl ${quoteColorClass} mb-4`}>“</div>
    <p className="text-gray-400 italic mb-6 leading-relaxed">
      "{quote}"
    </p>
    <div className="border-t border-gray-700 pt-4 flex items-center">
      <img
        src={imgSrc}
        alt={`Foto de ${name}`}
        className={`w-12 h-12 rounded-full mr-4 object-cover border-2 ${quoteColorClass}`}
      />
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-sm text-primary font-medium">{course}</div>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Lo que Dicen Nuestros Estudiantes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Gracias a Lexigo, conseguí ese ascenso en mi trabajo. Las clases de conversación con hablantes nativos son increíbles y muy efectivas."
            name="María P."
            course="Curso de Inglés Avanzado"
            imgSrc="https://randomuser.me/api/portraits/women/44.jpg"
            quoteColorClass="text-accent"
            borderColorClass="border-accent"
          />
          <TestimonialCard
            quote="Empecé el curso de Portugués sin saber nada y ahora puedo comunicarme perfectamente en mis viajes a Brasil. ¡Muy recomendado!"
            name="Javier M."
            course="Curso de Portugués Básico"
            imgSrc="https://randomuser.me/api/portraits/men/32.jpg"
            quoteColorClass="text-primary"
            borderColorClass="border-primary"
          />
          <TestimonialCard
            quote="La plataforma es muy intuitiva y el enfoque cultural del curso de Italiano es fascinante. Aprender es divertido y fácil de seguir."
            name="Sofía G."
            course="Curso de Italiano Intermedio"
            imgSrc="https://randomuser.me/api/portraits/women/68.jpg"
            quoteColorClass="text-accent"
            borderColorClass="border-accent"
          />
        </div>
      </div>
    </section>
  );
};