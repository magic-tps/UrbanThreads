import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { productos } from "../data/productos";

const Galeria = () => {
  const numero = "51924786633";

  const handleComprar = (nombre, precioPromo, etiqueta) => {
    const mensaje = `Hola, estoy interesado en comprar:\n\n🛍️ Producto: ${nombre}\n💰 Precio: ${precioPromo}\n🏷️ Descuento: ${etiqueta}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const renderSeccion = (titulo, items, id) => (
    <section id={id} className="mb-24 bg-pink-50">
      <h2 className="text-2xl font-bold mb-6 text-center text-rose-700">
        {titulo}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((prod) => (
          <div
            key={prod.id}
            className="bg-white border border-rose-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 relative"
          >
            <span className="absolute top-2 left-2 bg-rose-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {prod.etiqueta}
            </span>
            <img
              src={prod.imagen}
              alt={prod.nombre}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-rose-900">
                {prod.nombre}
              </h3>
              <div className="mt-2">
                <span className="text-gray-400 line-through mr-2 text-sm">
                  {prod.precioOriginal}
                </span>
                <span className="text-rose-700 font-bold">
                  {prod.precioPromo}
                </span>
              </div>
              <button
                onClick={() =>
                  handleComprar(prod.nombre, prod.precioPromo, prod.etiqueta)
                }
                className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md text-sm hover:bg-rose-600 transition-colors"
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <Navbar />
      <main className="bg-pink-50 w-full">
        <div className="max-w-6xl mx-auto py-24 px-6">
          <h1 className="text-4xl font-bold text-center mb-16 text-rose-800">
            Galería de Estilos
          </h1>
          {renderSeccion("Hombre", productos.hombre, "hombre")}
          {renderSeccion("Mujer", productos.mujer, "mujer")}
          {renderSeccion("Niños", productos.ninos, "ninos")}
          {renderSeccion("Parejas", productos.parejas, "parejas")}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Galeria;
