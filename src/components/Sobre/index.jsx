import React, { useState } from "react";
/* import { X, Menu } from "include-react"; */
import "./Sobre.css";
import emailIcon from "../../assets/imgs/email-icone.png";
import userIcon from "../../assets/imgs/usuario-icone.png";
import homeIcon from "../../assets/imgs/casa-icone.png";

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="sobre-content">
        <h1 className="title-sobre">Sobre mim</h1>

        <div className="select">
          <div className="navegacao">
            <ul>
              <li className="active">
                <a>Informações</a>
              </li>
              <li>
                <a>Qualificações</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="descricao">
          <div className="descricao-text">
            <h2>
              Sempre se dedicando ao máximo para entregar o melhor resultado.
            </h2>
          </div>

          <div className="descricao-text">
            <p className="minha-apresentacao">
              Codando interfaces e manipulando dados, busco trazer novas
              experiências e facilitar a vida dos usuários, sempre contribuindo
              com a acessibilidade.
            </p>
          </div>
          <div className="informacao">
            <div className="informacao-text-line">
              <div className="informacao-text">
                <img src={userIcon} alt="icone-usuario" />
                <p>Gabriel Guerreiro</p>
              </div>
              <div className="informacao-text">
                <img src={emailIcon} alt="icone-email" />
                <p>ep.gabrielguerreiro@gmail.com</p>
              </div>
            </div>
            <div className="informacao-text">
              <img src={homeIcon} alt="icone-casa" />
              <p>Boa Viagem - CE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
