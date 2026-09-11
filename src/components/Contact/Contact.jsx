import "./Contact.css";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

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

            <a
  href="https://wa.me/5491123970234?text=Hola%20Joaquin,%20vi%20tu%20portfolio%20y%20me%20gustaría%20consultarte%20por%20un%20proyecto."
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button"
>
             < FaWhatsapp /> Contactarme
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
            <a href="mailto:fontqode@gmail.com" className="contact-link">
              <div className="contact-icon"> < MdEmail /></div>
              <div>
                <small>Email</small>
                <p>fontqode@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/joaquin-gonzalez-b40910243/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-icon"> < FaLinkedin /> </div>
              <div>
                <small>LinkedIn</small>
                <p>Mi perfil profesional</p>
              </div>
            </a>

            <a
              href="https://github.com/joaquingonzalezfonta"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-icon"> < FaGithub /> </div>
              <div>
                <small>GitHub</small>
                <p>Mis proyectos</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
