import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Services.css";


const services = [
  {
    id: "01",
    whatsappMessage: "Hola Joaquín, vi tu portfolio y me gustaría consultarte por una landing page o sitio web para mi proyecto.",
    title: "Landing Pages y sitios web",
    description:
      "Sitios modernos, responsive y personalizados para negocios, profesionales y emprendimientos.",
    features:
      "Landing pages · Sitios institucionales · Portfolios · Catálogos digitales",
  },
  {
    id: "02",
    whatsappMessage: "Hola Joaquín, vi tu portfolio y me interesa desarrollar una tienda online para mi negocio. Me gustaría conocer más sobre el servicio de ecommerce.",
    title: "Ecommerce y tiendas online",
    description:
      "Tiendas con catálogo, filtros, carrito, checkout y gestión de productos, según las necesidades del negocio.",
    features:
      "Tiendas online · Catálogos autogestionables · Integración de consultas por WhatsApp",
  },
  {
    id: "03",
    whatsappMessage: "Hola Joaquín, vi tu portfolio y quisiera consultarte por un sistema de gestión y control de stock para mi negocio.",
    title: "Sistemas de gestión y stock",
    description:
      "Aplicaciones para organizar productos, inventario, movimientos y operaciones internas de un negocio.",
    features:
      "Control de stock · Gestión de productos · Paneles administrativos · Registro de movimientos",
  },
  {
    id: "04",
    whatsappMessage: "Hola Joaquín, vi tu portfolio y me interesa un CRM para organizar mis clientes y dar seguimiento a las consultas de mi negocio.",
    title: "CRM y gestión de clientes",
    description:
      "Herramientas para centralizar clientes, consultas, seguimientos y oportunidades comerciales.",
    features:
      "Base de clientes · Seguimiento de consultas · Estados de oportunidades · Historial de contactos",
  },
  {
    id: "05",
    whatsappMessage: "Hola Joaquín, vi tu portfolio y quisiera consultarte por un dashboard para visualizar datos, reportes e indicadores de mi negocio.",
    title: "Dashboards y visualización de datos",
    description:
      "Paneles que permiten consultar información y visualizar indicadores para facilitar decisiones.",
    features:
      "Dashboards · Reportes · Consultas SQL · Indicadores de negocio",
  },
  {
    id: "06",
    whatsappMessage: "Hola Joaquín, vi tu portfolio y necesito mantenimiento y mejoras para mi sitio web. Me gustaría consultarte por este servicio.",
    title: "Mantenimiento y mejoras web",
    description:
      "Actualizaciones, corrección de errores, mejoras visuales y nuevas funcionalidades en sitios existentes.",
    features:
      "Mantenimiento · Optimización responsive · Nuevas secciones · Integración de funcionalidades",
  },
];


function Services() {
  const [activeService, setActiveService] = useState(null);

  const handleToggle = (id) => {
    setActiveService((current) => (current === id ? null : id));
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <h2>Services</h2>
        </motion.div>

        <div className="services-list">
          {services.map((service, index) => {
            const isOpen = activeService === service.id;

            return (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className={`service-item ${isOpen ? "is-open" : ""}`}
                key={service.id}
                onPointerMove={(event) => {
                  if (event.nativeEvent.pointerType === "mouse") {
                    setActiveService(service.id);
                  }
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === "mouse") {
                    setActiveService((current) =>
                      current === service.id ? null : current
                    );
                  }
                }}
              >
                <h3 className="service-heading">
                  <button
                    className="service-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${service.id}`}
                    onClick={() => handleToggle(service.id)}
                  >
                    <span>{service.title}</span>

                    <span className="service-symbol" aria-hidden="true">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-panel-${service.id}`}
                      className="service-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      role="region"
                      aria-label={service.title}
                    >
                      <div className="service-panel-inner">
                        <p className="service-description">
                          {service.description}
                        </p>

                        <p className="service-features">
                            {service.features}
                        </p>

                        <a
                          href={`https://wa.me/5491123970234?text=${encodeURIComponent(service.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="service-link"
                        >
                          Consultar por este servicio
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
