import React, { useEffect, useState } from "react";
import "../assets/css/DashboardUser/DashboardUser.scss";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

function DashboardUser() {
  const [Showsidebar, setShowsidebar] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const ShowSideBar = () => {
    setShowsidebar(!Showsidebar);
  };

  console.log(user);

  return (
    <div>
      <div className="Container-Nav-user">
        <div className="logo-container-user">
          <h2 className="h2-user">
            Henry <span className="span-user">Home</span>
          </h2>
        </div>
      </div>
      <div className="Container-user">
        <div className="Container-menu-icon">
          {Showsidebar === false ? (
            <MenuOutlined onClick={ShowSideBar} className="Container-icon" />
          ) : (
            <CloseOutlined onClick={ShowSideBar} className="Container-icon" />
          )}
          <div
            className={Showsidebar ? "Container-menu active" : "Container-menu"}
          >
            {!Showsidebar ? (
              <div></div>
            ) : (
              <ul className="ul-container-menu">
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
                {`No Tienes Hotel Favorito :(`}
              </h2>
            </div>
          </div>
          <div className="Container-Reservs">
            <h1 className="Last-reservs-name" id="Last-Reservs">
              Ultimas reservaciones
            </h1>
            <div className="Last-reservs">
              <h2 className="h2-container">
                {`No Tienes Reservaciones Previas :(`}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUser;