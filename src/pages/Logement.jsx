import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Error from "./Error";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";

function Logement() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <>
      <Carousel logement={logement} />
      <main className="logement">
        <section className="info-container">
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
            <Rating logement={logement} />
            <div className="flex align-center">
              <p className="text-color min-content">{logement.host.name}</p>
              <img
                className="host"
                src={logement.host.picture}
                alt={logement.host.name}
              ></img>
            </div>
          </div>
        </section>

        <section className="toggles-container">
          <article className="toggle-wrapper">
            <Collapse title={"Description"} content={logement.description} />
          </article>
          <article className="toggle-wrapper">
            <Collapse title={"Équipements"} content={logement.equipments} />
          </article>
        </section>
      </main>
    </>
  );
}

export default Logement;
