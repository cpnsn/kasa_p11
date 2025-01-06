import { useState } from "react";

function Collapse({ title, content }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="about">
        <h2>{title}</h2>
        <img
          onClick={toggleContent}
          className={`arrow-icon ${isVisible ? "rotate" : ""}`}
          src={"/images/icons/arrow_down.svg"}
          alt="icon"
        />
      </div>
      <div className={`about-content ${isVisible ? "visible" : "hidden"}`}>
        {Array.isArray(content) ? (
          content.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
