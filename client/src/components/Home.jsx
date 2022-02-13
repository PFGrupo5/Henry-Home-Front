import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import Footer from "./Footer";
import NavBar from "./NavBarHome";
import Loading from "./Loading";
import { getHotels } from "../FilesStore/Actions/index.js";
import Aside from "./Aside/Aside";
import "../assets/css/Home/Home.css";
import Pages from "./Pages";

export default function Home() {

  const [page , setPage] = useState(1)
  const [size , setSize] = useState(2)

  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels);
  const count = useSelector((state) => state.count);

  const changePage = (e)=>{
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
      <div>
        <Aside />
        <NavBar />
        <Pages pages={Math.floor(count/size)} actualPage={page} changePage={changePage} />
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
