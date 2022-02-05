import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { getHotels } from "../FilesStore/Actions/index.js";

export default function Home() {
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
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
                location={e.Location.name}
                img={e.images}
                price={e.pricePerNight}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}