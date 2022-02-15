import React from "react";
import "../assets/css/Footer/Footer.scss";
import { CopyrightOutlined, GithubOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="footContainer">
      <div className="div-about">
        <h4 className="footTitle">About Us</h4>
        <p className="footDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          exercitationem qui laudantium reiciendis sunt porro voluptatum
          consequuntur atque soluta aut totam corrupti sint in tenetur alias
          quam, dolorem neque tempora? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id accusamus tempore corporis excepturi aliquid,
          dolorum illo, distinctio expedita sit qui exercitationem. Tenetur hic
          distinctio voluptas, rerum quidem eligendi nulla ab?
        </p>
      </div>
      <div className="underFoot">
        <div className="copy">
          <CopyrightOutlined /> 2022 HenryHotel, Inc
        </div>

        <a
          href="https://github.com/PFGrupo5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined className="git-icon" />
        </a>
      </div>
    </div>
  );
}
