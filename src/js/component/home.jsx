import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import { cards } from "./Card.jsx";

//create your first component
const Home = () => {
  document.title = "React Landing Page";
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="cards d-flex justify-content-center">
        <Card chosenCard={cards.puppy} />
        <Card chosenCard={cards.kitty} />
        <Card chosenCard={cards.steve} />
        <Card chosenCard={cards.maracaibo} />
      </div>
    </>
  );
};

export default Home;
