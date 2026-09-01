import './Hero.css'
import { motion } from 'framer-motion';

function Hero() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: false }}
    >
      <section id="inicio" className="hero">
        <div className="hero-content">
          <p className="hero-intro">Hola, soy</p>

          <h1>Joaquín Gonzalez</h1>

          <h2>Desarrollador Web</h2>

          <p className="hero-description">
            Transformo ideas en soluciones digitales modernas y funcionales.
            Creo experiencias web pensadas para crecer junto a cada proyecto.
          </p>

          <div className="hero-buttons">
            <a className='contact-link' href="#projects">Ver mis proyectos</a>

            <a className='contact-link' href="#contact">Contactarme</a>
          </div>
        </div>
      </section>
      </motion.div>
    </>
  );
}

export default Hero;
