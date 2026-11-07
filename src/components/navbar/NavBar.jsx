import { useState } from "react";
import "./NavBar.css";

function Navbar() {

    const [menuHamburguesa, setMenuHamburguesa] = useState(false)

  return (
    <>
      <nav className="navbar">
        <button type="button" aria-label="Abrir o cerrar navegación" aria-expanded={menuHamburguesa} aria-controls="navbar-links" className="menu-button" onClick={() => setMenuHamburguesa(!menuHamburguesa)}>
            ☰
        </button>

        <ul id="navbar-links" onClick={() => setMenuHamburguesa(false)} className={`navbar-links ${menuHamburguesa ? 'open' : ''}`}>
          <li className="navbar-lista">
            <a className="links-navbar" href="#inicio">Home</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#about">About</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#services">Services</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#skills">Skills</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#projects">Projects</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
