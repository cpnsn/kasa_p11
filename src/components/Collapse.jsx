import { useState } from "react";

function Collapse({ title, content }) {
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
      {isVisible && (
        <div className="about-content">
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;