import React from "react";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js"
import Card from "./Card.js";
import data from "./data";

export default function App() {
    //cards component iterating data.js
  const cards = data.map(item => {
    return (
      <Card
      //insert props
        key = {item.id} //assigns unique key
        {...item}
      />
    );
  });
  return (
    <div>
      <Navbar img={require("./images/airbnb-logo.png")} />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
}
