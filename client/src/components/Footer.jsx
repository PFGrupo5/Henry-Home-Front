import React from "react";
import "../assets/css/Footer/Footer.css";
import { CopyrightOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="container">
      <div className="div-about">
        <h4 className="title">About Us</h4>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          exercitationem qui laudantium reiciendis sunt porro voluptatum
          consequuntur atque soluta aut totam corrupti sint in tenetur alias
          quam, dolorem neque tempora?
        </p>
      </div>

      <hr />

      <h3 className="copy">
        <CopyrightOutlined className="copy-icon" /> 2022 HenryHotel, Inc
      </h3>

      <a
        href="https://github.com/PFGrupo5"
        target="_blank"
        className="icons github"
      >
        <i class="fab fa-github"></i>
      </a>
    </div>
  );
}
