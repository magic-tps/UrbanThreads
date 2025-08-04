import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const numeroWhatsApp = "51924786633";
  const mensaje = "Hola, estoy interesada en Urban Threads 👚✨";
  const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensaje
  )}`;
  const instagramLink = "https://www.instagram.com/tomagic1/";
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100009212299475&locale=es_LA";

  return (
    <footer className="w-full bg-pink-100 text-rose-900 border-t border-rose-200">
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-xl font-bold text-rose-800">Urban Threads</h2>
            <p className="text-sm">
              Moda urbana pensada para ti. Delicadeza, fuerza y autenticidad en
              cada prenda.
            </p>
            <p className="text-sm text-rose-600">
              © {currentYear} MagiCoder. Todos los derechos reservados.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="space-y-2">
            <h4 className="text-rose-800 font-semibold mb-2">Síguenos</h4>
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaFacebookF className="text-[#1877F2]" />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-[#E1306C]" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaWhatsapp className="text-[#25D366]" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm border-t border-rose-200 pt-4 text-rose-700">
          <Link to="/" className="hover:text-rose-900 transition">
            Inicio
          </Link>
          <Link to="/#promociones" className="hover:text-rose-900 transition">
            Promociones
          </Link>
          <Link to="/galeria" className="hover:text-rose-900 transition">
            Galería
          </Link>
          <Link to="/galeria#hombre" className="hover:text-rose-900 transition">
            Hombre
          </Link>
          <Link to="/galeria#mujer" className="hover:text-rose-900 transition">
            Mujer
          </Link>
          <Link to="/galeria#ninos" className="hover:text-rose-900 transition">
            Niños
          </Link>
          <Link
            to="/galeria#parejas"
            className="hover:text-rose-900 transition"
          >
            Parejas
          </Link>
          <Link to="/#contacto" className="hover:text-rose-900 transition">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
