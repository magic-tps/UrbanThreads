import React from "react";

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="bg-pink-50 py-16 px-6 lg:px-20 text-pink-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 font-serif text-rose-800">
          Escríbenos con confianza
        </h2>
        <p className="text-pink-600 text-center max-w-xl mx-auto mb-10">
          ¿Tienes dudas sobre nuestros productos o necesitas ayuda con tu
          pedido? Estamos aquí para ayudarte con cariño.
        </p>

        <form
          className="bg-white shadow-lg rounded-2xl p-6 space-y-6 border border-rose-100"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold text-rose-800"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="mt-1 block w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-semibold text-rose-800"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                className="mt-1 block w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-semibold text-rose-800"
            >
              Tu mensaje
            </label>
            <textarea
              id="mensaje"
              rows="4"
              className="mt-1 block w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
            >
              ✨ Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
