import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HomeOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import "../../assets/css/Dashboard Admin/admin.css";
import { getUserDetail } from "../../FilesStore/Actions";
import Cards from "../Cards";

export default function Admin() {
  const dispatch = useDispatch();
  const infoUser = JSON.parse(localStorage.getItem("profile")).result;

  useEffect(() => {
    dispatch(getUserDetail(infoUser.id, infoUser.role));
  }, [dispatch, infoUser.id, infoUser.role]);

  const userDetail = useSelector((state) => state.userDetail);
  return (
    <div className="containerAdmin">
      <div>
        <hr />
        <h2 className="titleAdmin">Mis Alojamientos</h2>
        <div className="btonCreate">
          <Link to={"/create"}>
            <button>Public your House</button>
          </Link>
        </div>
        <hr />
      </div>

      <div className="searchAdmin">
        <div className="lupa">
          <SearchOutlined />
        </div>
        <input placeholder="Search" className="search"></input>
      </div>

      <div className="housesAdmin">
        {userDetail.Housings?.map((e) => {
          return (
            <Cards
              name={e?.name}
              id={e?.id}
              location={e?.LocationId}
              img={e?.images}
              price={e?.pricePerNight}
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
