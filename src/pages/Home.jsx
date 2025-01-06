import data from "../data/data.json";

import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Banner
        imgSrc="/images/home_header.png"
        text="Chez vous, partout et ailleurs"
      />
      <main>
        <section className="cards-container">
          {data.map((item, index) => (
            <Card
              key={index}
              imgSrc={item.cover}
              imgTitle={item.title}
              title={item.title}
              link={item.id}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
