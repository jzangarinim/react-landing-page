import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div>hola desde el card</div>
    </>
  );
};

export default Home;
