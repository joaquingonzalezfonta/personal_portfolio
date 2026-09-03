import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <div className="contact-content">
            <h2> Contacto</h2>
            <p className="contact-description">
              Si querés desarrollar un sitio web, e-commerce o una solución
              digital para tu proyecto, hablemos.
            </p>

            <a href="mailto:tuemail@gmail.com" className="contact-button">
              Contactarme <span>→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <div className="contact-links">
            <a href="mailto:tuemail@gmail.com" className="contact-link">
              <div className="contact-icon">✉</div>
              <div>
                <small>Email</small>
                <p>tuemail@gmail.com</p>
              </div>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">in</div>
              <div>
                <small>LinkedIn</small>
                <p>Mi perfil profesional</p>
              </div>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">⌘</div>
              <div>
                <small>GitHub</small>
                <p>Mis proyectos</p>
              </div>
              <span>↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
