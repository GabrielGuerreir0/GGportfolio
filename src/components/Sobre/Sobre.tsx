import React, { useState, type JSX } from "react";
import "./Sobre.css";
import emailIcon from "../../assets/imgs/email-icone.png";
import userIcon from "../../assets/imgs/usuario-icone.png";
import homeIcon from "../../assets/imgs/casa-icone.png";
import react from "../../assets/imgs/react-logo.png";
import ionic from "../../assets/imgs/ionic.png";
import tailwind from "../../assets/imgs/tailwindcss.png";
import docker from "../../assets/imgs/docker.png";
import figma from "../../assets/imgs/figma.png";
import angular from "../../assets/imgs/angular.png";

// Interface para o item de dados que tem apenas a propriedade 'info'
interface InfoContent {
  info: JSX.Element;
}

// Interface para o item de dados que tem 'title', 'description' e 'info'
interface QualificacoesContent {
  info: JSX.Element;
}

// Usa uma união de tipos para representar a estrutura do array contentData
type ContentItem = InfoContent | QualificacoesContent;

// Dados para a descrição e o título
const contentData: ContentItem[] = [
  {
    info: (
      <>
        <div className="informacao">
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
      </>
    ),
  },
  {
    info: (
      <div className="qualificacoes">
        <h2 className="titulo-secao">Minha jornada</h2>

        <div className="timeline">
          {/* Experiência */}
          <div className="coluna">
            <h3 className="subtitulo">Experiência</h3>
            <div className="item">
              <h4>Freelancer</h4>
              <p>FrontEnd-Dev</p>
              <span className="periodo">2023 - Presente</span>
            </div>

            <div className="item">
              <h4>Laboratório NUVEN</h4>
              <p>Programador Front-End (IONIC)</p>
              <span className="periodo">ago.2024 - Presente</span>
            </div>
          </div>

          <div className="coluna">
            <h3 className="subtitulo">Educação</h3>
            <div className="item">
              <h4>EEEP Venceslau Vieira Batista</h4>
              <p>Técnico de Informática</p>
              <span className="periodo">dez.2022 - Concluído</span>
            </div>

            <div className="item">
              <h4>IFCE - Campus Boa Viagem</h4>
              <p>Análise e Desenvolvimento de Sistemas</p>
              <span className="periodo">ago.2025 - Em curso</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    info: (
      <div className="informacao">
        <div className="descricao-text-skill">
          <h2>O que utilizo diariamente</h2>
        </div>
        <div className="descricao-text-skill">
          <h3>Skills</h3>
        </div>
        <div className="informacao-skills">
          <ul className="lista-skills">
            <li>Front-end dev</li>
            <li>Back-end dev</li>
            <li>Mobile dev</li>
          </ul>
        </div>
        <div className="lista-ferramentas-skills">
          <h3>Ferramentas</h3>
          <ul>
            <li>
              <img className="lista-logo" src={react} alt="react" />
            </li>
            <li>
              <img className="lista-logo" src={ionic} alt="ionic" />
            </li>
            <li>
              <img className="lista-logo" src={tailwind} alt="tailwind" />
            </li>
            <li>
              <img className="lista-logo" src={docker} alt="docker" />
            </li>
            <li>
              <img className="lista-logo" src={angular} alt="angular" />
            </li>
            <li>
              <img className="lista-logo" src={figma} alt="figma" />
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

const Sobre: React.FC = () => {
  // O estado agora é tipado para ser um número
  const [activeItem, setActiveItem] = useState<number>(0);

  // A função para lidar com o clique
  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <section className="sobre">
      <div className="sobre-content">
        <h1 className="title-sobre">Sobre mim</h1>

        <div className="select">
          <div className="navegacao">
            <ul>
              <li
                className={activeItem === 0 ? "active" : ""}
                onClick={() => handleItemClick(0)}
              >
                <a>Informações</a>
              </li>
              <li
                className={activeItem === 1 ? "active" : ""}
                onClick={() => handleItemClick(1)}
              >
                <a>Qualificações</a>
              </li>
              <li
                className={activeItem === 2 ? "active" : ""}
                onClick={() => handleItemClick(2)}
              >
                <a>Skills</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="descricao">{contentData[activeItem].info}</div>
      </div>
    </section>
  );
};

export default Sobre;
