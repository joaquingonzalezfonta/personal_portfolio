import "./Hero.css";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";


function Hero() {
  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            <p className="hero-intro">Hola, soy</p>

            <h1>Joaquín Gonzalez</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            <h2>Desarrollador Web</h2>

            <p className="hero-description">
              Impulso tu negocio con soluciones digitales modernas y funcionales.
              Desarrollo herramientas adaptadas a tus necesidades y objetivos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            <div className="hero-buttons">
              <a className="hero-link" href="#projects">
                Mis proyectos
              </a>

              <a className="hero-link" href="#contact">
                < FaWhatsapp /> Contactarme
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
