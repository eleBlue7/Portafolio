import { TypeAnimation } from "react-type-animation";
import { Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white">
          eleBlue
        </h1>
        <Code2 className="w-8 h-8 text-blue-500 animate-pulse" />
      </div>

      <TypeAnimation
        sequence={[
          "Desarrollador móvil y web 💻",
          2000,
          "Apasionado por la tecnología 🚀",
          2000,
          "Amante de la música 🎶",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-lg sm:text-2xl text-gray-300"
      />

      <p className="max-w-xl mt-6 text-gray-400 leading-relaxed">
        Soy un desarrollador enfocado en crear experiencias digitales modernas,
        eficientes y visualmente elegantes. Me encanta combinar diseño y
        funcionalidad para construir productos con propósito.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="mailto:eleuteriorasa@gmail.com?subject=Hola%20eleBlue!&body=Hola%20ele!%2C%20me%20gustaría%20ponerme%20en%20contacto%20contigo."
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
        >
          💬 Hola, eleBlue!
        </a>
      </div>
    </section>
  );
}