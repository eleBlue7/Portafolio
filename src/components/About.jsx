import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Music, Code2, Rocket, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 text-gray-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Sobre Mí
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Hola, soy <span className="text-blue-400">eleBlue</span> 👋
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Soy un desarrollador que disfruta construir cosas útiles y
                visualmente atractivas. Me gusta explorar nuevas tecnologías,
                crear soluciones elegantes y aprender de cada proyecto que
                realizo.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Cuando no estoy programando, probablemente estoy escuchando
                música 🎧, descubriendo nuevos sonidos o experimentando
                con ideas creativas que me ayudan a pensar en nuevas soluciones.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Imagen o íconos */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex flex-col items-center justify-center"
            >
              <Code2 className="w-10 h-10 text-blue-400 mb-2" />
              <p className="text-sm text-gray-300">Desarrollo</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex flex-col items-center justify-center"
            >
              <Music className="w-10 h-10 text-pink-400 mb-2" />
              <p className="text-sm text-gray-300">Música</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-600/20 flex flex-col items-center justify-center"
            >
              <Rocket className="w-10 h-10 text-green-400 mb-2" />
              <p className="text-sm text-gray-300">Innovación</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-600/20 flex flex-col items-center justify-center"
            >
              <Heart className="w-10 h-10 text-red-400 mb-2" />
              <p className="text-sm text-gray-300">Pasión</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}