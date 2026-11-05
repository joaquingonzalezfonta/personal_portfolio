import { useState } from "react";
import "./NavBar.css";

function Navbar() {

    const [menuHamburguesa, setMenuHamburguesa] = useState(false)

  return (
    <>
      <nav className="navbar">
        <a href="#inicio" className="link-logo">
          <img className="logo-img" src="/img/logo.png" alt="logo" />
        </a>

        <button className="menu-button" onClick={() => setMenuHamburguesa(!menuHamburguesa)}>
            ☰
        </button>

        <ul className={`navbar-links ${menuHamburguesa ? 'open' : ''}`}>
          <li className="navbar-lista">
            <a className="links-navbar" href="#inicio">Home</a>
          </li>

          <li className="navbar-lista">
            <a className="links-navbar" href="#about">About me</a>
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
