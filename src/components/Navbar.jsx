import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const goTo = (hash) => {
    if (pathname !== "/") {
      navigate(`/#${hash}`);
    } else {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    closeMenu();
  };

  const goToGaleria = () => {
    if (pathname !== "/galeria") {
      navigate("/galeria");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMenu();
  };

  const goToGaleriaSeccion = (id) => {
    if (pathname !== "/galeria") {
      navigate(`/galeria#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 112;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    closeMenu();
  };

  return (
    <nav className="bg-pink-50 shadow-md fixed top-0 w-full z-50 border-b border-rose-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-rose-600 tracking-wide">
            URBAN THREADS
          </div>

          <div className="hidden md:flex space-x-6 text-rose-700 font-medium">
            <button
              onClick={() => goTo("inicio")}
              className="hover:text-rose-900"
            >
              Inicio
            </button>
            <button
              onClick={() => goTo("promociones")}
              className="hover:text-rose-900"
            >
              Promociones
            </button>
            <button onClick={goToGaleria} className="hover:text-rose-900">
              Galería
            </button>
            <button
              onClick={() => goToGaleriaSeccion("hombre")}
              className="hover:text-rose-900"
            >
              Hombre
            </button>
            <button
              onClick={() => goToGaleriaSeccion("mujer")}
              className="hover:text-rose-900"
            >
              Mujer
            </button>
            <button
              onClick={() => goToGaleriaSeccion("ninos")}
              className="hover:text-rose-900"
            >
              Niños
            </button>
            <button
              onClick={() => goToGaleriaSeccion("parejas")}
              className="hover:text-rose-900"
            >
              Parejas
            </button>
            <button
              onClick={() => goTo("contacto")}
              className="hover:text-rose-900"
            >
              Contacto
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-rose-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-pink-50 border-t border-rose-200 text-rose-700 flex flex-col">
          {[
            "inicio",
            "promociones",
            "galeria",
            "hombre",
            "mujer",
            "ninos",
            "parejas",
            "contacto",
          ].map((item) => (
            <button
              key={item}
              onClick={
                item === "galeria"
                  ? goToGaleria
                  : ["hombre", "mujer", "ninos", "parejas"].includes(item)
                  ? () => goToGaleriaSeccion(item)
                  : () => goTo(item)
              }
              className="px-4 py-3 hover:bg-rose-100"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
