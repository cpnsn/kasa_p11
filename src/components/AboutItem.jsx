import { useState } from "react";

function AboutItem({ title, content }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="about">
        <span>{title}</span>
        <img
          onClick={toggleContent}
          className={`arrow-icon ${isVisible ? "rotate" : ""}`}
          src={"/images/icons/arrow_down.svg"}
          alt="icon"
        />
      </div>
      {isVisible && <div className="about-content">{content}</div>}
    </div>
  );
}

export default AboutItem;
