import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item = {item}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-list">{cards}</div>
    </div>
  );
}
