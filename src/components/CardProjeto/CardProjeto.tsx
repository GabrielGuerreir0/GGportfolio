import "./CardProjeto.css";
import check from "../../assets/imgs/check.png";

// Define the interface for your props
interface CardProjetoProps {
  name: string;
  image: string;
  onCardClick?: (name: string) => void;
}

const CardProjeto = ({ name, image, onCardClick }: CardProjetoProps) => {
  const handleClick = () => {
    if (onCardClick) {
      onCardClick(name);
    }
  };

  return (
    <div className="card-projeto" onClick={handleClick}>
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
