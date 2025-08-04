import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const numero = "51924786633"; // Reemplaza con tu número real
  const mensaje = "Hola, estoy interesado en Urban Threads 👕";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <FaWhatsapp className="text-3xl" />
      </div>
    </a>
  );
};

export default WhatsappButton;
