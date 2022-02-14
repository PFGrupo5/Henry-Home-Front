import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "../assets/css/Aside/Aside.css";
import Calification from "../UI/Aside/Calification";
import People from "../UI/Aside/People";
import Place from "../UI/Aside/Place";
import Price from "../UI/Aside/Price";

export default function Aside() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="containerOfContainers">
      {sidebar === false ? (
        <MenuOutlined onClick={showSidebar} className="buttons" />
      ) : (
        <CloseOutlined onClick={showSidebar} className="buttons" />
      )}
      <div className="generalContainer">
        <div
          className={sidebar ? "filtersContainer active" : "filtersContainer"}
        >
          <Calification />
          <People />
          <Place />
          <Price />
        </div>
      </div>
    </div>
  );
}
