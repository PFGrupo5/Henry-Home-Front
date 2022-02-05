import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import { getHotels } from "../FilesStore/Actions/index.js";

import "../assets/css/Home/Home.css"

export default function Home() {

  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getHotels());
  }, []);
  return (
    <div>
      {
        allHotels.map((e) => {
          console.log(e)
          return (
            <Cards
              name={e.name}
              id={e.id}
              location={e.Location.name}
              img={e.images}
              price={e.pricePerNight}
            />
          );
        })
      }
    </div>
  );
}