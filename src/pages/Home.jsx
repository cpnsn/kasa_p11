import data from '../data.json'

import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  return (
    <div className="home-container">
      <Banner 
        imgSrc="/images/home_header.png" 
        text="Chez vous, partout et ailleurs" 
      />
      <div className="cards-container">
        {data.map((item, index) => (
            <Card key={index}
              imgSrc={item.cover}
              imgTitle={item.title}
              title={item.title}
              link={item.id}
            />
        ))}
      </div>
    </div>
  );
}

export default Home;
