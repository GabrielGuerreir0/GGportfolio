import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contato.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import seta from "../../assets/imgs/seta-direita.png";
import avatar from "../../assets/imgs/avatar.png";

// Interface para tipar o estado do formulário
interface FormState {
  nome: string;
  email: string;
  mensagem: string;
}

const Contato: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [erro, setErro] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔹 Validação básica
    if (!form.nome || !form.email || !form.mensagem) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setErro("E-mail inválido.");
      return;
    }

    setErro("");

    // 🔹 Enviar via EmailJS
    emailjs
      .send(
        "service_3ds870n",
        "template_roc7gzs",
        {
          from_name: form.nome,
          from_email: form.email,
          message: form.mensagem,
        },
        "Kyw3BZxAKa2TFN-yA"
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          setForm({ nome: "", email: "", mensagem: "" });
        },
        (error) => {
          console.log("Erro ao enviar: " + error.text);
        }
      );
  };

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
            {erro && <p className="erro-mensagem">{erro}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="mensagem"
                placeholder="Sua mensagem"
                value={form.mensagem}
                onChange={handleChange}
              ></textarea>

              <div className="botao-content">
                <button type="submit" className="botao-form">
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
