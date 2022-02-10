import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import Footer from "./Footer";
import NavBar from "./NavBarHome";
import Loading from "./Loading";
import { getHotels } from "../FilesStore/Actions/index.js";
import Aside from "./Aside/Aside";

import "../assets/css/Home/Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  if (allHotels?.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <Aside />
        <NavBar />
        <div className="home">
          {allHotels.map((e) => {
            return (
              <Cards
                name={e.name}
                id={e.id}
                location={e.Location.name}
                img={e.images}
                price={e.pricePerNight}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
