import { useParams } from "react-router-dom";

import data from "../data.json";
import Error from "./Error";
import AboutItem from "../components/AboutItem";

function Logement() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="home-container logement">
      <img
        className="logement-cover"
        src={logement.cover}
        alt={logement.title}
      ></img>
      <div className="flex justify-between">
        <h1 className="text-color">{logement.title}</h1>
        <div className="flex align-center">
          <p className="text-color min-content">{logement.host.name}</p>
          <img
            className="host"
            src={logement.host.picture}
            alt={logement.host.name}
          ></img>
        </div>
      </div>
      <p>{logement.location}</p>
      <div className="flex">
        {logement.tags.map((tag, index) => (
          <p className="tag" key={index}>
            {tag}
          </p>
        ))}
      </div>
      <div className="flex">
        <div className="toggle">
            <AboutItem title="Description" content={logement.description} />
        </div>
        <div className="toggle">
            <AboutItem title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Logement;
