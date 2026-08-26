import { useState } from "react";
import "./NavBar.css";

function Navbar() {

    const [menuHamburguesa, setMenuHamburguesa] = useState(false)

  return (
    <>
      <nav className="navbar">
        <a href="#inicio" className="navbar-logo">
          JG
        </a>

        <button className="menu-button" onClick={() => setMenuHamburguesa(!menuHamburguesa)}>
            ☰
        </button>

        <ul className={`navbar-links ${menuHamburguesa ? 'open' : ''}`}>
          <li className="navbar-lista">
            <a className="links-navbar" href="#inicio">Inicio</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#about">Sobre mí</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#skills">Skills</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#projects">Proyectos</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
