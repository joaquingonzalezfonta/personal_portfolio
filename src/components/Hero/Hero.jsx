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

              <a className="hero-link" target="_blank" rel="noopener noreferrer" href="https://wa.me/5491123970234?text=Hola%20Joaquin,%20vi%20tu%20portfolio%20y%20me%20gustaría%20consultarte%20por%20un%20proyecto.">
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
