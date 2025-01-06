import { Link } from "react-router-dom";

function Card({ imgSrc, imgTitle, title, link }) {
  return (
    <article className="card">
      <Link to={`/logement/${link}`}>
        <img src={imgSrc} alt={imgTitle} />
        <h2>{title}</h2>
      </Link>
    </article>
  );
}

export default Card;
