import { Github, Linkedin, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-10 py-12 text-neutral-400 text-sm">
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Información personal */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">
            Contáctame!
          </h2>
          <p className="text-neutral-500 text-sm mb-4">
            Contáctame para discutir algún proyecto en mente o simplemente para saludar!!!
          </p>
          
          {/* Botón de contacto igual que en Hero */}
          <a
            href="mailto:eleuteriorasa@gmail.com?subject=Hola%20eleBlue!&body=Hola%20ele!%2C%20me%20gustaría%20ponerme%20en%20contacto%20contigo."
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 text-sm font-medium"
          >
            Hola denuevo!
          </a>
        </div>

        {/* Columna 2: Redes sociales */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">
            Redes Sociales
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/eleBlue7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/eleblue__/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram size={16} /> Instagram
            </a>
            <a
              href="https://www.last.fm/user/eleBlue"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Music2 size={16} /> Last.fm
            </a>
          </div>
        </div>

        {/* Columna 3: Tecnologías */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">
            Tecnologías
          </h3>
          <ul className="space-y-1">
            <li>Flutter / Dart</li>
            <li>Python / Django</li>
            <li>React / Tailwind CSS</li>
            <li>Firebase / AWS</li>
            <li>Git / GitHub</li>
            <li>SQL / NoSQL</li>
          </ul>
        </div>
      </div>

      {/* Easter egg de música - Super sutil */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <p className="text-neutral-600 text-xs opacity-40 hover:opacity-70 transition-opacity duration-300 text-center">
          ...alguna recomendación musical? escríbeme por Last.fm! 🎵
        </p>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-neutral-800 mt-8 pt-6 text-center text-neutral-600 text-xs">
        © {new Date().getFullYear()} Digify. Todos los derechos reservados.
      </div>
      

      
    </footer>
  );
}