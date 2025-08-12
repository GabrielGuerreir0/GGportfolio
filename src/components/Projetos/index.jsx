import React from "react";
import "./Projetos.css";
import CardProjeto from "../CardProjeto";
import dataverse from "../../assets/imgs/dataverse.png";
import clinicflow from "../../assets/imgs/ClinicFlow.png";
import techparatodos from "../../assets/imgs/TechParaTodos.png";
import lapis from "../../assets/imgs/lapis.png";
import bandeira from "../../assets/imgs/bandeira.png";
import calendario from "../../assets/imgs/calendario.png";

const Projetos = () => {
  return (
    <div className="projetos-container">
      <div className="projetos-paresentation-content">
        <div className="projeto-content">
          <h1>Conheça alguns dos meus projetos</h1>

          <div className="projetos-text">
            <div className="titulo-projeto">
              <img src={bandeira} alt="icone bandeira" />
              <h2>DataVerse</h2>
            </div>
            <div className="descricao-projeto">
              <div className="titulo-descricao">
                <img src={lapis} alt="icone lapis" />
                <h2>Descrição:</h2>
              </div>
              <p>
                O DataVerse foi desenvolvido em colaboração com colegas da
                faculdade como um sistema representativo das estruturas de dados
                mais comuns. O projeto inclui explicações breves sobre o
                funcionamento de cada estrutura, além de representações gráficas
                que facilitam a compreensão.
              </p>
            </div>
            <div className="data-projeto">
              <img src={calendario} alt="icone data" />
              <h2>2023/2024</h2>
            </div>
          </div>
        </div>
        <div className="projetos-img">
          <img src={dataverse} alt="" />
        </div>
      </div>

      <div className="projetos-apresentation">
        <CardProjeto name="DataVerse" image={dataverse} />
        <CardProjeto name="ClinicFlow" image={clinicflow} />
        <CardProjeto name="TechParaTodos" image={techparatodos} />
      </div>
    </div>
  );
};

export default Projetos;
