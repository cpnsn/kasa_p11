import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../data.json";
import Error from "./Error";
import Collapse from "../components/Collapse";

const pinkStar = "/images/icons/pink_star.svg";
const greyStar = "/images/icons/grey_star.svg";

function Logement() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!logement) {
    return <Error />;
  }

  const LogementRating = parseInt(logement.rating, 10);
  const stars = Array(5).fill(0).map((_, index) => index + 1);

  function seePrevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  }

  function seeNextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="home-container logement">
      <div className="relative">
        {logement.pictures.map((picture, index) => (
          <img
            key={index}
            className="logement-slide"
            style={{ display: index === currentIndex ? "block" : "none" }}
            src={picture}
            alt={"Image" + index}
          ></img>
        ))}

        {logement.pictures.length > 1 && (
          <>
            <span className="slides-count">
              {currentIndex + 1} / {logement.pictures.length}
            </span>

            <button onClick={seePrevSlide} className="gallery-button prev">
              <img src={"/images/icons/arrow_left.svg"} alt={"icon"}></img>
            </button>

            <button onClick={seeNextSlide} className="gallery-button next">
              <img src={"/images/icons/arrow_right.svg"} alt={"icon"}></img>
            </button>
          </>
        )}
      </div>
      <div className="info-container">
        <div className="">
          <h1 className="text-color">{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="flex flex-wrap">
            {logement.tags.map((tag, index) => (
              <p className="tag" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="name-rating">
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
          <div className="flex align-center">
            <p className="text-color min-content">{logement.host.name}</p>
            <img
              className="host"
              src={logement.host.picture}
              alt={logement.host.name}
            ></img>
          </div>
        </div>
      </div>

      <div className="toggles-container">
        <div className="toggle-wrapper">
          <Collapse title={"Description"} content={logement.description} />
        </div>
        <div className="toggle-wrapper">
          <Collapse title={"Équipements"} content={logement.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Logement;
