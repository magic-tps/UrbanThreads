import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { productos } from "../data/productos";

const Promociones = () => {
  const numero = "51924786633"; // Reemplaza con tu número real

  const handleComprar = (nombre, precioPromo, etiqueta) => {
    const mensaje = `Hola, estoy interesada en comprar:\n\n👗 Producto: ${nombre}\n💸 Precio: ${precioPromo}\n🎀 Descuento: ${etiqueta}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="promociones"
      className="bg-pink-50 py-16 px-6 lg:px-20 text-pink-900"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-serif text-pink-800">
          Promociones Elegantes
        </h2>
        <p className="text-pink-600 text-lg">
          Encuentra lo que te hace sentir única. Promociones solo por tiempo
          limitado.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {productos.promociones.map((producto) => (
            <SwiperSlide key={producto.id}>
              <div className="bg-white border rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 relative">
                <span className="absolute top-2 left-2 bg-rose-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  {producto.etiqueta}
                </span>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="p-4 flex flex-col items-start">
                  <h3 className="text-lg font-semibold text-rose-800">
                    {producto.nombre}
                  </h3>
                  <div className="mt-2">
                    <span className="text-gray-400 line-through mr-2 text-sm">
                      {producto.precioOriginal}
                    </span>
                    <span className="text-pink-700 font-bold text-base">
                      {producto.precioPromo}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      handleComprar(
                        producto.nombre,
                        producto.precioPromo,
                        producto.etiqueta
                      )
                    }
                    className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Promociones;
