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
          viewport={{ once: true }}
        >
          <article className="article-about">
            <h2>About me</h2>

            <p>
              Soy desarrollador Full Stack con formación en UX/UI y experiencia creando interfaces y aplicaciones web.
            </p>
            <p>
              Trabajo con tecnologías como React, JavaScript, Node.js y SQL, desarrollando desde sitios web y tiendas online hasta aplicaciones y sistemas de gestión personalizados.
            </p>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <article className="fontqode-about">
            <div className="fontqode-content">
              <h2> FONT QODE </h2>
              <p>
                FONT QODE representa mi enfoque de trabajo: entender las necesidades de cada proyecto y abordarlas con creatividad, compromiso y atención al detalle.
              </p>
              <p>
                Mi misión es combinar diseño y desarrollo para resolver problemas reales, crear herramientas que aporten valor y acompañar el crecimiento de cada negocio.              
              </p>

            </div>
          </article>
        </motion.div>
      </section>
    </>
  );
}

export default About;
