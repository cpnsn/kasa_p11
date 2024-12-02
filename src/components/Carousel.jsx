import { useState } from "react";

export default function Carousel({ logement }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  );
}
