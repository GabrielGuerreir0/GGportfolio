import "./Footer.css";
import githubIcon from "../../assets/imgs/github.png";
import instagramIcon from "../../assets/imgs/instagram.png";
import linkedinIcon from "../../assets/imgs/linkedin.png";

const Footer = () => {
  return (
    <div className="content-footer">
      <ul>
        <li>
          <a href="https://github.com/GabrielGuerreir0">
            <img className="icones" src={githubIcon} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/guerreir_gabriel/">
            <img className="icones" src={instagramIcon} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-guerreir0">
            <img className="icones" src={linkedinIcon} alt="linkedin" />
          </a>
        </li>
      </ul>
      <p className="direitos-reservados">
        Copyright © Gabriel Guerreiro. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
