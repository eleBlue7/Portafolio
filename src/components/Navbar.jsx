import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#habilidades" },

  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="
          bg-black/30 backdrop-blur-xl border border-white/10
          px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]
          flex items-center justify-center gap-8
          text-gray-300 text-sm font-medium
        "
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="
              relative hover:text-white transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-400 after:to-blue-400
              hover:after:w-full after:transition-all after:duration-300
              pb-0.5
            "
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
