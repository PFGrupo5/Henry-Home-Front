import React from "react";
// import Cards from "./Cards";
// import hoteles from "../harcodeado.json";
// import Footer from "./Footer";
import Aside from "./Aside/Aside";

export default function Home() {
  return (
    <div>
      <Aside>/</Aside>
      {/* {hoteles.map((e) => {
        return (
          <Cards
            name={e.name}
            id={e.id}
            location={e.location}
            img={e.img}
            price={e.pricePerNight}
          />
        );
      })} */}
    </div>
  );
}
