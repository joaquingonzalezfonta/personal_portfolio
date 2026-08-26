import "./Projects.css";

function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <h2>Mis proyectos</h2>

        <div className="projects-container">
          <article className="project-card">
            <h3>JGF Muebles</h3>

            <p>
              Ecommerce desarrollado con React y Firebase. Incluye catálogo de
              productos, filtros, carrito de compras y checkout.
            </p>

            <p>React · Firebase · JavaScript · Bootstrap</p>
          </article>

          <article className="project-card">
            <h3>Retail Analytics</h3>

            <p>
              Proyecto de análisis de datos utilizando PostgreSQL para trabajar
              con ventas, clientes y productos.
            </p>

            <p>SQL · PostgreSQL · DBeaver</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Projects;
