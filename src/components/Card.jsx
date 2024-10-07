import { Link } from "react-router-dom";

function Card({ imgSrc, imgTitle, title, link }) {
  return (
    <div className="card">
      <Link to={`/logement/${link}`}>
        <img src={imgSrc} alt={imgTitle} />
        <span>{title}</span>
      </Link>
    </div>
  );
}

export default Card;
