import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import { getHotels } from "../FilesStore/Actions/index.js";


export default function Home() {

  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.allHotels);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch] );

  return (
    <div>
      {allHotels === undefined ? (
        <div>
          <h1>cargando </h1>
        </div>
      ) : (
        allHotels.map((e) => {
          return (
            <Cards
              name={e.name}
              id={e.id}
              location={e.location}
              img={e.images}
              price={e.pricePerNight}
            />
          );
        })
      )}
    </div>
  );
}
