import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: false }}
    >
      <section id="skills" className="skills">
        <h2>Skills</h2>

        <div className="projects-container">
          <article className="project-card">
            <h3> Frontend </h3>

            <p>
              [ HTML ] [ CSS ] [ JavaScript ] [ React ]
            </p>
          </article>
          <article className="project-card">
            <h3> Backend </h3>

            <p>
              [ Node.js ] [ APIs ] [ Firebase ]
            </p>
            </article>
          <article className="project-card">
            <h3> Database </h3>

            <p>
              [ PostgreSQL ] [ SQL ] [ Firestore ]
            </p>
            </article>
          <article className="project-card">
            <h3> Design & Tools </h3>

            <p>
              [ Figma ] [ Git ] [ GitHub ] [ DBeaver ]
            </p>
          </article>
        </div>
      </section>
      </motion.div>
    </>
  );
}

export default Skills;
