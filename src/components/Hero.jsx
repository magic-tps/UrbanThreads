import React from "react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="bg-pink-50 text-rose-900 min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">
          Poleras que celebran tu estilo
        </h1>
        <p className="text-lg sm:text-xl text-rose-700 max-w-2xl mx-auto font-light">
          Diseñadas para mujeres auténticas. Conquista tu día con comodidad y
          elegancia.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="#productos"
            className="bg-rose-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-rose-600 transition-colors"
          >
            Ver productos
          </a>
          <a
            href="#promociones"
            className="border border-rose-500 text-rose-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-rose-500 hover:text-white transition-colors"
          >
            Ver promociones
          </a>
          <a
            href="#contacto"
            className="border border-rose-300 text-rose-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-rose-100 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
