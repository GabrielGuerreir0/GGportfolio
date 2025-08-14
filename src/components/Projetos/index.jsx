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
  const projetos = [
    {
      title: "DataVerse",
      description:
        "O DataVerse foi desenvolvido em colaboração com colegas da faculdade como um sistema representativo das estruturas de dados mais comuns. O projeto inclui explicações breves sobre o funcionamento de cada estrutura, além de representações gráficas que facilitam a compreensão.",
      date: "2023/2024",
      image: dataverse,
    },
    {
      title: "ClinicFlow",
      description:
        "O ClinicFlow é um sistema para gerenciamento de clínicas médicas, permitindo agendamento de consultas, cadastro de pacientes e integração com prontuários eletrônicos.",
      date: "2024",
      image: clinicflow,
    },
    {
      title: "TechParaTodos",
      description:
        "O TechParaTodos visa democratizar o acesso à tecnologia através de cursos online e presenciais, oferecendo aprendizado gratuito e acessível para todos.",
      date: "2023",
      image: techparatodos,
    },
  ];

  const [projetoSelecionado, setProjetoSelecionado] = React.useState(
    projetos[0]
  );

  const handleClick = (nomeProjeto) => {
    const projeto = projetos.find((p) => p.title === nomeProjeto);
    console.log(projeto);
    if (projeto) {
      setProjetoSelecionado(projeto);
    }
  };

  return (
    <div className="projetos-container">
      <div className="projetos-paresentation-content">
        <div className="projeto-content">
          <h1>Conheça alguns dos meus projetos</h1>

          <div className="projetos-text">
            <div className="titulo-projeto">
              <img src={bandeira} alt="icone bandeira" />
              <h2>{projetoSelecionado.title}</h2>
            </div>
            <div className="descricao-projeto">
              <div className="titulo-descricao">
                <img src={lapis} alt="icone lapis" />
                <h2>Descrição:</h2>
              </div>
              <p>{projetoSelecionado.description}</p>
            </div>
            <div className="data-projeto">
              <img src={calendario} alt="icone data" />
              <h2>{projetoSelecionado.date}</h2>
            </div>
          </div>
        </div>
        <div className="projetos-img">
          <img src={projetoSelecionado.image} alt="imagem projeto" />
        </div>
      </div>

      <div className="projetos-apresentation">
        <CardProjeto
          name="DataVerse"
          image={dataverse}
          onCardClick={handleClick}
        />
        <CardProjeto
          name="ClinicFlow"
          image={clinicflow}
          onCardClick={handleClick}
        />
        <CardProjeto
          name="TechParaTodos"
          image={techparatodos}
          onCardClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Projetos;
