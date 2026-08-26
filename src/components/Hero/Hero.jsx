import './Hero.css'

function Hero() {
  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-content">
          <p className="hero-intro">Hola, soy</p>

          <h1>Joaquín González</h1>

          <h2>Desarrollador Web</h2>

          <p className="hero-description">
            Creo aplicaciones web modernas, funcionales y responsive utilizando
            tecnologías como React, JavaScript, Python y SQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects">Ver mis proyectos</a>

            <a href="#contact">Contactarme</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
