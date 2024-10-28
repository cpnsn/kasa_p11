import data from "../about.json";

import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function About() {
  return (
    <div className="home-container">
      <Banner imgSrc="/images/about_header.jpeg" />

      <div>
        {data.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
