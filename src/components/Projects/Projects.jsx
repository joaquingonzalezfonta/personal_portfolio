import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <h2>Mis proyectos</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <div className="projects-container">
            <article className="project-card">
              <h3>JGF Muebles</h3>

              <p>
                Ecommerce desarrollado con React y Firebase. Incluye catálogo de
                productos, filtros, carrito de compras y checkout.
              </p>

              <p>React · Firebase · JavaScript · Bootstrap</p>

              <div className="hero-buttons">
                <a href="#projects" className="projects-links">Ver proyecto</a>

                <a href="#contact" className="projects-links">Contactarme</a>
              </div>
            </article>

            <article className="project-card">
              <h3>Retail Analytics</h3>

              <p>
                Proyecto de análisis de datos utilizando PostgreSQL para
                trabajar con ventas, clientes y productos.
              </p>

              <p>SQL · PostgreSQL · DBeaver</p>

              <div className="hero-buttons">
                <a href="#projects" className="projects-links">Ver proyecto</a>

                <a href="#contact" className="projects-links">Contactarme</a>
              </div>
            </article>

            <article className="project-card">
              <h3> Importcar</h3>

              <p>
                Ecommerce desarrollado con React y Firebase. Incluye catálogo de
                productos, formulario, contacto, carrito de compras y checkout.
              </p>

              <p> Java Script · React · MongoDB </p>

              <div className="hero-buttons">
                <a href="#projects" className="projects-links">Ver proyecto</a>

                <a href="#contact" className="projects-links">Contactarme</a>
              </div>
            </article>

            <article className="project-card">
              <h3> Embragues Gonzalez </h3>

              <p>Proyecto para empresa familiar en desarrollo...</p>

              <p> React · CSS · Git </p>

              <div className="hero-buttons">
                <a href="#contact" className="projects-links">Contactarme</a>
              </div>
            </article>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
