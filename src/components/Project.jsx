import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
               





export default function Projects() {
  const projects = [
    {
      title: "AddUpFast! - (Etapa beta)",
      description:
        "Aplicación móvil desarrollada en Flutter que permite registrar productos y precios por voz o texto, conectada a Firebase. Ideal para las personas que deseen tener registro de sus compras de los distintos recintos de venta. La aplicacion guarda a detalles las 'boletas' de cada compra, con dia y hora, productos, precios y total gastado.",
      images: [
        "public/img/auf1.jpeg",
        "public/img/auf2.jpeg",
        "public/img/auf3.jpeg",
        "public/img/auf4.jpeg",
        "public/img/auf5.jpeg",
      ],
      tech: ["Flutter", "Dart", "Firebase", "Speech-to-Text"],
    },
    {
      title: "furry",
      description:
        "Aplicación web en Django que permite agendar horas, gestionar consultas y manejar fichas de pacientes para una veterinaria local.",
      images: [
        "/projects/vetapp1.png",
        "/projects/vetapp2.png",
        "/projects/vetapp3.png",
      ],
      tech: ["Django", "PostgreSQL", "Bootstrap"],
    },
    {
      title: "balbalbalabalabal",
      description:
        "Mi portafolio en React con diseño minimalista, efectos visuales y animaciones suaves. Construido con Tailwind, Framer Motion y shadcn/ui.",
      images: [
        "/projects/portfolio1.png",
        "/projects/portfolio2.png",
        "/projects/portfolio3.png",
      ],
      tech: ["React", "TailwindCSS", "Framer Motion"],
    },
  ];

  return (
    <section
      id="proyectos"
      className="relative z-10 flex flex-col items-center justify-center px-6 py-20" // 🔥 QUITAR min-h-screen
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} 
        className="text-4xl font-bold text-white mb-16 text-center"
      >
        Proyectos Destacados
      </motion.h2>

      <div className="flex flex-col gap-20 max-w-6xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, reverse }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const cardRef = useRef(null);

  // Rotación automática cada 3 segundos
 
  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % project.images.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ 
        once: true,
        margin: "-50px"
      }}
      className={`flex flex-col lg:flex-row items-center gap-8 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carrusel de imágenes - Separar la imagen del contenedor */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full lg:w-2/5 flex justify-center bg-white/5 rounded-xl p-2 backdrop-blur-sm border border-white/10"
      >
        {/* Componente separado para la imagen que cambia */}
        <ImageSlider 
          images={project.images} 
          current={current} 
          title={project.title}
        />

        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full backdrop-blur-sm transition-all duration-200 text-sm z-10"
        >
          ❮
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full backdrop-blur-sm transition-all duration-200 text-sm z-10"
        >
          ❯
        </button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === current ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Descripción - Esta parte se mantiene igual */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full lg:w-3/5 text-center lg:text-left"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl font-semibold text-white mb-3 leading-tight"
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-4 text-sm leading-relaxed"
        >
          {project.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center lg:justify-start gap-1.5"
        >
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
              viewport={{ once: true }}
              className="px-2.5 py-0.5 text-xs bg-white/10 text-gray-200 rounded-full border border-white/10"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// 🔥 NUEVO: Componente separado solo para la imagen que cambia
function ImageSlider({ images, current, title }) {
  return (
    <motion.img
      key={images[current]} // Esta key hace que Framer Motion anime el cambio
      src={images[current]}
      alt={title}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="rounded-xl w-full max-w-[280px] h-auto object-contain"
    />
  );
}