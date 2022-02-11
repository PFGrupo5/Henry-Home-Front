import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HomeOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import "../../assets/css/Dashboard Admin/admin.css";
import { getHotels } from "../../FilesStore/Actions";
import Cards from "../Cards";

export default function Admin() {
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);
  return (
    <div className="containerAdmin">
      <div>
        <hr />
        <h2 className="titleAdmin">Mis Alojamientos</h2>
        <hr />
      </div>

      <div className="searchAdmin">
        <div className="lupa">
          <SearchOutlined />
        </div>
        <input placeholder="Search" className="search"></input>
      </div>

      <div className="housesAdmin">
        {!allHotels
          ? "Error"
          : allHotels.map((e) => {
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

      <div className="navbarAdmin">
        <div className="buttonsAdmin">
          <Link to="/home">
            <HomeOutlined className="homeAdmin" />
          </Link>
          <UserOutlined className="userAdmin" />
        </div>
      </div>
    </div>
  );
}
