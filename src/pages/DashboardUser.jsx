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
              <p className="p-container">
                Um título Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec purus neque, adipiscing malesuada lectus non,
                ullamcorper gravida augue. Donec rutrum augue eu dolor cursus,
                id luctus felis tincidunt. Pellentesque consectetur luctus dui
                quis adipiscing. Donec volutpat varius nulla, pretium vestibulum
                quam imperdiet et. Sed semper a erat nec mattis. In elementum
                nibh mauris, sit amet aliquet quam pharetra in. Nullam magna
                mauris, tempus a tellus varius, hendrerit mattis neque. Duis
                lacinia commodo magna eget scelerisque. Integer molestie
                fermentum nisl a bibendum. Donec congue, diam nec commodo
                elementum, tortor mauris vestibulum erat, adipiscing aliquet
                enim quam sit amet nulla. Maecenas dignissim varius mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Maecenas ligula lectus, rhoncus
                eget scelerisque in, consectetur eu nulla. Vestibulum eu sem
                massa. Pellentesque consectetur luctus Nullam magna mauris,
                tempus a tellus varius, hendrerit mattis neque. Duis lacinia
                commodo magna eget scelerisque. Integer molestie fermentum nisl
                a bibendum. Donec congue, diam nec commodo elementum, tortor
                mauris vestibulum erat, adipiscing aliquet enim quam sit amet
                nulla. Maecenas dignissim varius mattis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Maecenas ligula lectus, rhoncus eget scelerisque in,
                consectetur eu nulla. Vestibulum eu sem massa. Nullam magna
                mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec purus neque, adipiscing malesuada lectus non, ullamcorper
                gravida augue. Donec rutrum augue eu dolor cursus, id luctus
                felis tincidunt. Pellentesque consectetur luctus dui quis
                adipiscing. Donec volutpat varius nulla, pretium vestibulum quam
                imperdiet et. Sed semper a erat nec mattis. In elementum nibh
                mauris, sit amet aliquet quam pharetra in. Maecenas ligula
                lectus, rhoncus eget scelerisque in, consectetur eu nulla.
                Vestibulum eu sem massa.
              </p>
            </div>
          </div>
          <div className="Container-Reservs">
            <h1 className="Last-reservs-name" id="Last-Reservs">
              Ultimas reservaciones
            </h1>
            <div className="Last-reservs">
              <p className="p-container">
                Um título Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec purus neque, adipiscing malesuada lectus non,
                ullamcorper gravida augue. Donec rutrum augue eu dolor cursus,
                id luctus felis tincidunt. Pellentesque consectetur luctus dui
                quis adipiscing. Donec volutpat varius nulla, pretium vestibulum
                quam imperdiet et. Sed semper a erat nec mattis. In elementum
                nibh mauris, sit amet aliquet quam pharetra in. Nullam magna
                mauris, tempus a tellus varius, hendrerit mattis neque. Duis
                lacinia commodo magna eget scelerisque. Integer molestie
                fermentum nisl a bibendum. Donec congue, diam nec commodo
                elementum, tortor mauris vestibulum erat, adipiscing aliquet
                enim quam sit amet nulla. Maecenas dignissim varius mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Maecenas ligula lectus, rhoncus
                eget scelerisque in, consectetur eu nulla. Vestibulum eu sem
                massa. Pellentesque consectetur luctus Nullam magna mauris,
                tempus a tellus varius, hendrerit mattis neque. Duis lacinia
                commodo magna eget scelerisque. Integer molestie fermentum nisl
                a bibendum. Donec congue, diam nec commodo elementum, tortor
                mauris vestibulum erat, adipiscing aliquet enim quam sit amet
                nulla. Maecenas dignissim varius mattis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Maecenas ligula lectus, rhoncus eget scelerisque in,
                consectetur eu nulla. Vestibulum eu sem massa. Nullam magna
                mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec purus neque, adipiscing malesuada lectus non, ullamcorper
                gravida augue. Donec rutrum augue eu dolor cursus, id luctus
                felis tincidunt. Pellentesque consectetur luctus dui quis
                adipiscing. Donec volutpat varius nulla, pretium vestibulum quam
                imperdiet et. Sed semper a erat nec mattis. In elementum nibh
                mauris, sit amet aliquet quam pharetra in. Maecenas ligula
                lectus, rhoncus eget scelerisque in, consectetur eu nulla.
                Vestibulum eu sem massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUser;

/*

 */
