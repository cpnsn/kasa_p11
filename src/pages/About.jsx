import data from "../data/about.json";

import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function About() {
  return (
    <>
      <Banner imgSrc="/images/about_header.jpeg" />
      <main>
        <section>
          {data.map((item, index) => (
            <article>
              <Collapse key={index} title={item.title} content={item.content} />
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default About;
