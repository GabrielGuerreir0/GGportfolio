import "./Card.css";
interface CardProps {
  url: string;
  text: string;
  title: string;
  author: string;
}

const Card = ({ url, text, title, author }: CardProps) => {
  return (
    <div className="card">
      <div className="icon-container">
        <img src={url} alt="Ícone de Web Development" className="icon" />
      </div>
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="quote">"{text}"</p>
        <p className="author">- {author}</p>
      </div>
    </div>
  );
};
export default Card;
