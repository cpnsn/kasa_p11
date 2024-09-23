import data from "../about.json";

import Banner from "../components/Banner";
import AboutItem from "../components/AboutItem";

function About() {
  return (
    <div className="home-container">
      <Banner imgSrc="/images/about_header.jpeg" />

      <div>
        {data.map((item, index) => (
          <AboutItem key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
