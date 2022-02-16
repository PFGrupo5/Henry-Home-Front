import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import NavBar from "../components/NavBarHome";
import Loading from "../components/Loading";
import { getHotels } from "../FilesStore/Actions/index.js";
import Aside from "../components/Aside";
import "../assets/css/Home/Home.scss";
import Pages from "../components/Pages";

export default function Home() {

  const [page, setPage] = useState(1)
  const [size] = useState(6)

  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels);
  const count = useSelector((state) => state.count);

  const changePage = (e) => {
    setPage(e)
  }

  useEffect(() => {
    dispatch(getHotels(page, size));
  }, [dispatch, page, size]);

  if (allHotels?.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="fullHome">
        <NavBar />
        <Pages pages={Math.floor(count / size)} actualPage={page} changePage={changePage} />
        <Aside />
        <div className="home">
          <div className="cardsHome">
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
        </div>
        <Footer />
      </div>
    );
  }
}