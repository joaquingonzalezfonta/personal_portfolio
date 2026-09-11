import "./Projects.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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
              <div className="project-image-container">
                <img
                  src="/img/proyecto-muebles.png"
                  alt="Proyecto JGF Muebles"
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <h3> Muebles</h3>

                <p>
                  Ecommerce desarrollado con React y Firebase. Incluye catálogo
                  de productos, filtros, carrito de compras y checkout.
                </p>

                <p className="project-tech">
                  React · Firebase · JavaScript · Bootstrap
                </p>

                <div className="hero-buttons">
                  <a
                    href="https://jgf-muebles.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-links"
                  >
                    Ver proyecto
                  </a>

                  <a
                    href="https://github.com/joaquingonzalezfonta/coder-app-react-93430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-links"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image-container">
                <img
                  src="/img/proyecto-importcar.png"
                  alt="Proyecto JGF Muebles"
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <h3> Importcar</h3>

                <p>
                  Ecommerce full stack, incluye catálogo de productos,
                  autenticación, y panel de administración para productos y usuarios. 
                  Se enfoca mas en la logica del backend
                </p>

                <p className="project-tech"> Java Script · React · MongoDB </p>

                <div className="hero-buttons">
                  <a
                    href="https://joaquin-imporcar.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-links"
                  >
                    Ver proyecto
                  </a>

                  <a href="https://github.com/joaquingonzalezfonta/frontend" className="projects-links">
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image-container">
                <img
                  src="/img/retailproject.png"
                  alt="Proyecto JGF Muebles"
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <h3>Retail Analytics</h3>

                <p>Análisis de datos desarrollado con SQL y PostgreSQL. Incluye gestión de clientes, productos y ventas, consultas avanzadas y análisis de información comercial.</p>

                <p className="project-tech">SQL · PostgreSQL · DBeaver</p>

                <div className="hero-buttons">
                  <a
                    href="https://github.com/joaquingonzalezfonta/capstone_project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-links"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-blocked">
                <FontAwesomeIcon icon={faLock} className="icon-block"/>
              </div>

              <div className="project-content">
                <h3> Embragues Gonzalez </h3>

                <p>Proyecto para empresa familiar en desarrollo...</p>

                <p className="project-tech"> React · CSS · Git </p>
              </div>
            </article>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
