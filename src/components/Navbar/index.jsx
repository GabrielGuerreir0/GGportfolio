import React, { useState } from "react";
/* import { X, Menu } from "include-react"; */
import "./Navbar.css";
import logo from "../../assets/imgs/logo.png";
import hamburguericon from "../../assets/imgs/hamburguer.png";
import closeIcon from "../../assets/imgs/close-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo Gabriel Guerreiro" />
          </a>
        </div>
        <div className="menu-icon">
          <a>
            <img
              src={hamburguericon}
              alt="icone de menu hamburguer"
              onClick={toggleMenu}
            />
          </a>
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-close">
          <img
            src={closeIcon}
            alt="Fechar"
            className="close-btn"
            onClick={toggleMenu}
          />
        </div>
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/projetos">PROJETOS</a>
          </li>
          <li>
            <a href="/contato">CONTATO</a>
          </li>
        </ul>
        <div className="sidebar-social">
          <a href="#">
            <i className="fab fa-github" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
