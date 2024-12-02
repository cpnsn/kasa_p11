export default function Rating({ logement }) {
  const pinkStar = "/images/icons/pink_star.svg";
  const greyStar = "/images/icons/grey_star.svg";

  const LogementRating = parseInt(logement.rating, 10);
  const stars = Array(5)
    .fill(0)
    .map((_, index) => index + 1);
  return (
    <div>
      {stars.map((star) => (
        <img
          key={star}
          src={star <= LogementRating ? pinkStar : greyStar}
          alt={"icon"}
          className="star"
        />
      ))}
    </div>
  );
}
