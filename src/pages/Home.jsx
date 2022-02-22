import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";

import axios from "axios";
import { URL_BACK } from "../config";
import Loading from "../components/Loading";
import { getHotels, getUserDetail } from "../FilesStore/Actions/index.js";
import Aside from "../components/Aside";
import "../assets/css/Home/Home.scss";
import Pages from "../components/Pages";

export default function Home() {
  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("profile"));
  const infoUser = User ? User.result : { id: null, role: null };
  const userDetail = useSelector((state) => state.userDetail);

  useEffect(() => {
    infoUser.id && dispatch(getUserDetail(infoUser.id, infoUser.role));
  }, [dispatch, infoUser.id, infoUser.role]);

  //filtros
  const [Info, setInfo] = useState({
    status: "Accepted",
    stars: 0, // min de estrellas
    numberOfPeople: null, // numero de gente
    numberOfBeds: null, // numero de camas
    location: "", // all-created-notCreated
    minPrice: null,
    maxPrice: null,
  });

  const setearInfo = (e) => {
    setInfo(e);
  };

  const onClickFav = (id, favState) => {
    favState
      ? axios
          .delete(`${URL_BACK}/favs`, {
            headers: {
              Authorization: User.token,
            },
            data: { HousingId: id },
          })
          .then((response) => {
            console.log("Borrado con exito", response);
            dispatch(getUserDetail(infoUser.id, infoUser.role));
          })
          .catch((error) => {
            console.log({ error });
          })
      : axios
          .post(
            `${URL_BACK}/favs`,
            { HousingId: id },
            {
              headers: {
                Authorization: User.token,
              },
            }
          )
          .then((response) => {
            console.log("Agregado con exito", response);
            dispatch(getUserDetail(infoUser.id, infoUser.role));
          })
          .catch((error) => {
            console.log({ error });
          });
  };

  //paginado
  const [page, setPage] = useState(1);
  const [size] = useState(6);

  const allHotels = useSelector((state) => state.hotels);
  const count = useSelector((state) => state.count);

  const userRole = User?.result.role;
  const changePage = (e) => {
    setPage(e);
  };

  const findHouses = () => {
    dispatch(getHotels(page, size, Info));
  };

  const findAllHouses = () => {
    dispatch(
      getHotels(page, size, {
        status: "Accepted",
        stars: 0,
        numberOfPeople: null,
        numberOfBeds: null,
        location: null,
        minPrice: null,
        maxPrice: null,
      })
    );
  };

  useEffect(() => {
    dispatch(getHotels(page, size, { status: "Accepted" }));
  }, [dispatch, page, size, infoUser.id, infoUser.role]);

  return (
    <main>
      <div className="home-containter">
        <Aside
          findHouses={findHouses}
          setInfo={setearInfo}
          Info={Info}
          findAllHouses={findAllHouses}
        />
        <div className="cards-container">
          <div className="cardsHome">
            {typeof allHotels !== "string" ? (
              allHotels?.length ? (
                allHotels.map((e) => {
                  return (
                    <Cards
                      name={e.name}
                      id={e.id}
                      location={e.Location.name}
                      img={e.images}
                      price={e.pricePerNight}
                      role={userRole}
                      detail={userDetail}
                      onClickFav={onClickFav}
                    />
                  );
                })
              ) : (
                <Loading />
              )
            ) : (
              <div>
                <h2>No hay casas disponibles</h2>
              </div>
            )}
          </div>
          <Pages
            pages={Math.ceil(count / size)}
            actualPage={page}
            changePage={changePage}
          />
        </div>
      </div>
      {/* <Footer2 /> */}
    </main>
  );
}
