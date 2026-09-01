import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false }}
      >
        <section id="about" className="about">
          <article className="article-about">
            <h2>Sobre mí</h2>

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

          <article>
            <h2> Mi formación </h2>

            <p>
              UX/UI Design → Desarrollo Web → Full Stack Engineer → JavaScript
              Avanzado → React Avanzado → SQL
            </p>
          </article>
        </section>
      </motion.div>
    </>
  );
}

export default About;
