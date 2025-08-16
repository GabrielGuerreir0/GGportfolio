import "./Contato.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import seta from "../../assets/imgs/seta-direita.png";
import avatar from "../../assets/imgs/avatar.png";

const Contato = () => {
  return (
    <div className="content-total">
      <Navbar />
      <main>
        <div className="contato-container">
          <div className="contato-form">
            <div className="titulos">
              <h1 className="titulo-form">
                Toda grande ideia começa com um rabisco. Vamos desenhar a sua!
              </h1>
              <p className="subtitulo-form">
                Preencha o formulário e compartilhe sua ideia comigo!
              </p>
            </div>

            <form action="">
              <input type="text" placeholder="Seu nome" className="nome" />
              <input type="email" placeholder="Seu e-mail" className="email" />
              <textarea
                placeholder="Sua mensagem"
                className="mensagem"
              ></textarea>
              <div className="botao-content">
                <button className="botao-form">
                  Vamos conversar <img src={seta} alt="seta para direita" />
                </button>
              </div>
            </form>
          </div>
          <div className="contato-image">
            <div className="content-image">
              <img
                src={avatar}
                alt="avatar do contato"
                className="avatar-contato"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
