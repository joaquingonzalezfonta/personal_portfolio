import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <section id="about" className="about">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <article className="article-about">
            <h2>About me</h2>

            <p>
              Soy desarrollador Full Stack, con formación en UX/UI y experiencia
              creando interfaces y aplicaciones web. Me gusta combinar diseño,
              desarrollo y lógica para construir productos funcionales, claros y
              pensados para resolver necesidades reales.
            </p>

            <p>
              Actualmente sigo ampliando mis conocimientos en tecnologías como
              React, Node.js, JavaScript y SQL, con el objetivo de crear desde
              sitios web y e-commerce hasta sistemas y soluciones digitales más
              completas.
            </p>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <article className="fontqode-about">
            <div className="fontqode-content">
              <h2> FONTQODE </h2>
              <p>
                FONT QODE representa mi enfoque de trabajo: transformar ideas y necesidades en soluciones digitales que combinen diseño, funcionalidad y tecnología para acompañar el crecimiento de cada proyecto.
              </p>

            </div>
            <div className="fontqode-image-container">
              <img className="fontqode-logo" src="/img/logo.png" alt="Logo de Fontqode" />
            </div>
          </article>
        </motion.div>
      </section>
    </>
  );
}

export default About;
