function Card({ imgSrc, imgTitle, title }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={imgTitle} />
      <span>{title}</span>
    </div>
  );
}

export default Card;
