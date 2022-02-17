import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import "../assets/css/DashboardUser/DashboardUser.scss";
import {
  CloseOutlined,
  MenuOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Carrusel from "../UI/Carrousel";
import Loading from "../components/Loading";
import { getUserDetail } from "../FilesStore/Actions";

function DashboardUser() {
  const [Showsidebar, setShowsidebar] = useState(false);
  const userDetail = useSelector((state) => state.userDetail);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  useEffect(() => {
    dispatch(getUserDetail(user.result.id, user.result.role));
  }, [dispatch, user.result.id, user.result.role]);

  const ShowSideBar = () => {
    setShowsidebar(!Showsidebar);
  };

  if (userDetail.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="Container-Genral">
        <div className="Container-menu">
          {Showsidebar === false ? (
            <MenuOutlined
              onClick={ShowSideBar}
              className="icon-DashboardUser"
            />
          ) : (
            <CloseOutlined
              onClick={ShowSideBar}
              className="icon-DashboardUser"
            />
          )}
          <div
            className={
              Showsidebar ? "Container-sidebar active" : "Container-sidebar"
            }
          >
            {!Showsidebar ? (
              <div></div>
            ) : (
              <ul className="ul-container-menu">
                <li className="li-menu">
                  <a href="/home">
                    Go <span className="span-user">Back</span>
                    <ArrowLeftOutlined />
                  </a>
                </li>
                <li className="li-menu">
                  <a href="#Edit-Profile">Editar Perfil</a>
                </li>
                <li className="li-menu">
                  <a href="#Favs-hotels">Hoteles Favoritos</a>
                </li>
                <li className="li-menu">
                  <a href="#Last-Reservs">Ultimas reservaciones </a>
                </li>
                <li className="li-menu">
                  <a href="#Log-Out">cerrar sesión</a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="Container-data">
          <h1 className="Container-dash-name">{`${user.result.firstName} ${user.result.lastName}`}</h1>
          <div className="Container-Favs">
            <h1 className="Favs-hotels-name" id="Favs-hotels">
              Hoteles Favoritos
            </h1>
            <div className="Favs-Cards">
              <h2 className="h2-container">
                {userDetail.favs.length === 0 ? (
                  <div>{`No Tienes Hotel Favorito :(`}</div>
                ) : (
                  <div>
                    {userDetail.favs.map((f) => {
                      return (
                        <div className="container-card">
                          <Carrusel
                            imgs={f.images}
                            dotsBool={false}
                            styles="imgCard"
                          ></Carrusel>
                          <Link to={`/home/${f.id}`}>
                          <p className="name-dash">{f.name}</p>
                          </Link>
                          <p className="price-dash">
                            Precio por Noche: {f.pricePerNight}
                          </p>
                          <p className="person-dash">
                            Cantidad de Personas: {f.numberOfPeople}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </h2>
            </div>
          </div>
          <div className="Container-Reservs">
            <h1 className="Last-reservs-name" id="Last-Reservs">
              Ultimas reservaciones
            </h1>
            <div className="Last-reservs">
              <h2 className="h2-container">
                {!userDetail.Reservations ? (
                  <div>{`No Tienes Reservaciones Previas :(`}</div>
                ) : (
                  <div>
                    {userDetail.Reservations.map((f) => {
                      return (
                        <div className="container-reserv">
                          <p className="in-dash">Check-In: {f.date_start}</p>
                          <p className="out-dash">
                            Check-Out: {f.date_end}
                          </p>
                            <Link to={`/home/${f.id_hotel}`} >
                              <span className="boton-dash-user">Ver Lugar Reservado</span>
                            </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardUser;
