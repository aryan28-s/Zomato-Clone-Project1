import React from "react";
import HeroSection from "../Components/HeroSection";
import Card from "../Components/Card";

const Home = () => {
  const cardsData = [
    {
      image: "hotel1.jpg",
      title: "Restaurant 1",
      description: "Delicious food from Restaurant 1.",
    },
    {
      image: "hotel2.jpg",
      title: "Restaurant 2",
      description: "Tasty meals from Restaurant 2.",
    },
    {
      image: "Hotel3.jpg",
      title: "Restaurant 3",
      description: "Amazing dishes from Restaurant 3.",
    },
  ];

  return (
    <div>
      <HeroSection />
      <div className="container my-5">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;