import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sobre from "../../components/Sobre";
import Card from "../../components/Card";
import Projetos from "../../components/Projetos";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import "./Home.css";
import avatar from "../../assets/imgs/avatar.png";
import downloadIcon from "../../assets/imgs/download-icon.png";
import contactIcon from "../../assets/imgs/contato-icon.png";
import githubIcon from "../../assets/imgs/github.png";
import linkedinIcon from "../../assets/imgs/linkedin.png";
import instagramIcon from "../../assets/imgs/instagram.png";
import setaBaixo from "../../assets/imgs/seta-baixo.png";
import webIcon from "../../assets/imgs/web-icon.png";
import mobileIcon from "../../assets/imgs/mobile-icon.png";
import uiIcon from "../../assets/imgs/ui-icon.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const irParaContato = () => {
    navigate("/contato");
  };

  const baixarCurriculo = () => {
    const link = document.createElement("a");
    link.href = "/CV_GabrielGuerreiro.pdf";
    link.download = "CV_GabrielGuerreiro.pdf";
    link.click();
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="home-main">
          <motion.div
            className="home-contentsocial"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul>
              <li>
                <a href="https://github.com/GabrielGuerreir0">
                  <img src={githubIcon} alt="icone de github" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/guerreir_gabriel/">
                  <img src={instagramIcon} alt="icone de instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gabriel-guerreir0">
                  <img src={linkedinIcon} alt="icone de linkedin" />
                </a>
              </li>
            </ul>
          </motion.div>
          <div className="home-content-text">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              Ola!
              <br /> Eu sou o <span className="texto-destaue">Gabriel</span>,
              <br />
              desenvolvedor front-end
            </motion.h1>
            <div className="botoes-interacao">
              <motion.button
                className="botao"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: 10, scale: 0.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                onClick={irParaContato}
              >
                Entre em contato{" "}
                <img src={contactIcon} alt="icone de contato" />
              </motion.button>
              <motion.button
                onClick={baixarCurriculo}
                className="botao"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: 10, scale: 0.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                Dowload CV <img src={downloadIcon} alt="icone de download" />
              </motion.button>
            </div>
          </div>
          <div className="home-content-avatar">
            <motion.img
              className="avatar-img"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              src={avatar}
              alt="imagem do avatar"
            />
          </div>
        </div>
        <div className="dwon-indicator">
          <div className="dwon-indicator-image">
            <motion.img src={setaBaixo} alt="Seta para baixo"></motion.img>
          </div>
          <div className="dwon-indicator-text">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="texto"
            >
              Sou apaixonado por tecnologia, design e boas experiências
              digitais. Aqui você vai encontrar um pouco do que venho criando e
              aprendendo nessa jornada no mundo do desenvolvimento. Seja
              bem-vindo(a) ao meu portfólio!
            </motion.p>
          </div>
        </div>
        <div className="home-content-sobre">
          <div className="home-content-avatar-sobre">
            <img src={avatar} alt="imagem avatar" />
          </div>
          <div>
            <Sobre />
          </div>
        </div>
        <div className="home-content-cards">
          <h2 className="title-cards">Serviços</h2>
          <div className="content-cards">
            <Card
              url={webIcon}
              title="Web Development"
              text="A Web não conecta apenas máquinas, ela conecta pessoas."
              author="Tim Berners-Lee"
            />
            <Card
              url={mobileIcon}
              title="App Development"
              text="Mobile não é o futuro, é o agora."
              author="Luke Wroblewski"
            />
            <Card
              url={uiIcon}
              title="UI/UX Design"
              text="Design não é apenas o que parece e o que se sente. Design é como funciona."
              author="Steve Jobs"
            />
          </div>
        </div>

        <div className="home-content-projetos" id="projetos">
          <Projetos />
        </div>
        <div className="home-content-contact">
          <h2>
            Toda grande ideia merece ganhar vida. Vamos realizá-la juntos.
          </h2>
          <button onClick={irParaContato}>Entre em contato</button>
        </div>
        <div className="home-content-footer">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
