import React from "react";
import "../assets/css/Footer/Footer.scss";
import { CopyrightOutlined, GithubOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="footContainer">
      <div className="div-about">
        <h4 className="footTitle">About Us</h4>
        <p className="footDescription">
          Bienvenidos a Henry-Home, una pagina en la que podras publicar tus
          alojamientos y alquilar otros
        </p>
      </div>
      <div className="underFoot">
        <div className="copy">
          <CopyrightOutlined /> 2022 HenryHotel, Inc
        </div>

        <div>
          <a
            href="https://github.com/PFGrupo5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined className="git-icon" />
          </a>

          <a
            href="https://henry-home.vercel.app/admins"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </a>
        </div>
      </div>
    </div>
  );
}
