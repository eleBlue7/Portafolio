import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import NowPlaying from './components/NowPlaying';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Efecto Matrix - FUERA del contenedor con overflow */}
      <MatrixEffect />
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="flex flex-col">
          <section id="inicio" className="min-h-screen">
            <Hero />
          </section>

          <section id="sobre-mi" className="min-h-screen">
            <About />
          </section>

          <section id="proyectos">
            <Projects />
          </section>

          <section id="contacto">
            <Footer />
          </section>
        </div>
      </div>
      {/* 🎵 Widget de Now Playing */}
      <NowPlaying />
    </div>
  );
}

// Componente Matrix separado - CORREGIDO
function MatrixEffect() {
  const blueColors = [
    'rgba(147, 197, 253, 0.6)',  // blue-300
    'rgba(96, 165, 250, 0.6)',   // blue-400  
    'rgba(59, 130, 246, 0.6)',   // blue-500
    'rgba(56, 189, 248, 0.6)',   // sky-400
    'rgba(34, 211, 238, 0.6)',   // cyan-400
    'rgba(129, 140, 248, 0.6)'   // indigo-400
  ];
  
  return (
    <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
      {/* Fondo azul gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-black to-indigo-900/5"></div>
      
      {/* Líneas con diferentes tonos de azul - CORREGIDO */}
      {[...Array(25)].map((_, i) => {
        const randomColor = blueColors[Math.floor(Math.random() * blueColors.length)];
        return (
          <div
            key={i}
            className="absolute top-0 w-px h-40"
            style={{
              left: `${2 + i * 4}%`,
              background: `linear-gradient(to bottom, transparent, ${randomColor}, transparent)`,
              animation: `matrixFall ${2.5 + Math.random() * 2.5}s linear infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.15 + Math.random() * 0.3
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes matrixFall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          8% {
            opacity: 0.7;
          }
          92% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}