import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Promociones from "./components/Promociones";
import Galeria from "./pages/Galeria";
import WhatsappButton from "./components/WhatsappButton";

const HomePage = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <Hero />
      <Promociones />
      <Contacto />
    </main>
    <Footer />
  </>
);

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [hash]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter basename="/UrbanThreads">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
      <WhatsappButton /> {/* Se muestra en todas las páginas */}
    </BrowserRouter>
  );
};

export default App;
