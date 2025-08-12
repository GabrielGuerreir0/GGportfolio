import React from "react";
import "./CardProjeto.css";
import check from "../../assets/imgs/check.png";

const CardProjeto = ({ name, image }) => {
  return (
    <div className="card-projeto">
      <div className="card-projeto-img">
        <img src={image} alt={name} />
      </div>
      <div className="title-card">
        <img className="check" src={check} alt="check" />
        <h2 className="nome-projeto">{name}</h2>
      </div>
    </div>
  );
};

export default CardProjeto;
