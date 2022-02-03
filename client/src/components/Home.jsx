import React from "react";
import Cards from "./Cards";
import hoteles from "../harcodeado.json"

export default function Home() {
  return (
  <div>
    {
      hoteles.map((e) => {
        return(
          <Cards 
            name={e.name}
            id={e.id}
            location={e.location}
            img={e.img}
            price={e.pricePerNight}
          />
        )
      })
    }
  </div>
  );
}
