import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import "../assets/css/DashboardUser/DashboardUser.scss";
import {
  CloseOutlined,
  MenuOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Carrusel from "../UI/Carrousel";
import Loading from "../components/Loading";
import { getUserDetail } from "../FilesStore/Actions";
import defaultUser from '../assets/img/user_default.png'

function DashboardUser() {
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const [Showsidebar, setShowsidebar] = useState(false);
  const { userDetail } = useSelector((state) => state);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUserDetail(user.result.id, user.result.role))
  }, [dispatch, user.result.id, user.result.role]);



  const ShowSideBar = () => {
    setShowsidebar(!Showsidebar);
  };

  if (!userDetail) {
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
          <div className="DashboardUser-userInfo">
            <h1>Información General</h1>
            <img src={userDetail.imageUrl || defaultUser} />
            <p>Nombre: {`${userDetail.firstName} ${userDetail.lastName}`}</p>
            <p>Email: {`${userDetail.email}`}</p>
            <p>Rol: {userDetail.role}</p>
          </div>
          <div className="Container-Favs">
            <h1 className="Favs-hotels-name" id="Favs-hotels">
              Hoteles Favoritos
            </h1>
            <div className="Favs-Cards">
                {userDetail.favs.length === 0 ? (
                  <div>{`No Tienes Hotel Favorito :(`}</div>
                ) : (
                  <div>
                    {userDetail.favs.map((f) => {
                      return (
                        <div className="container-card">
                          <img
                            src={f.images}
                            className="cardUserImg_here"
                          />
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
