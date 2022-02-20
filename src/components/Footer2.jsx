import React from "react";
import "../assets/css/Footer/Footer2.scss";
import { CopyrightOutlined, GithubOutlined } from "@ant-design/icons";

export default function Footer2() {
  return (
    <div className="foot2Container">
      <div className="foot2Description">
        Henry <span>Home</span> <span className="span"></span>
        <p className="foot2PDeta">
          Bienvenidos a Henry-Home, una pagina en la que podras publicar tus
          alojamientos y alquilar otros
        </p>
      </div>
      <div className="foot2BePart">
        <h1 className="title">
          Se Parte de Nuestro Equipo<span className="span"></span>
        </h1>
        <ul className="foot2Ul">
          <li>
            <div>
              <a href="/admins" className="foot2A">
                Ser Administrador
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/owners" className="foot2A">
                Ser Dueño
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="foot2Contact">
        <h1 className="title">
          Contactanos <span className="span"></span>
        </h1>
        <a
          href="https://github.com/PFGrupo5"
          target="_blank"
          rel="noopener noreferrer"
          className="foot2Github"
        >
          {`Nuestro GitHub  `}
          {"       "}
          <GithubOutlined />
        </a>
      </div>
      <div className="foot2Copy">
        <p>
          <span className="spanCopy"></span>
          <CopyrightOutlined /> 2022 HenryHotel, Inc
          <span className="spanCopy"></span>
        </p>
      </div>
    </div>
  );
}
