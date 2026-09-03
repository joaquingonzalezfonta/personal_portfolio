import "./Hero.css";
import { motion } from "framer-motion";

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
              Transformo ideas en soluciones digitales modernas y funcionales.
              Creo experiencias web pensadas para crecer junto a cada proyecto.
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
                Contactarme
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
