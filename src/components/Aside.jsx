import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "../assets/css/Aside/Aside.scss";
import Calification from "../UI/Aside/Calification";
import People from "../UI/Aside/People";
import Place from "../UI/Aside/Place";
import Minprice from "../UI/Aside/Price";
import Beds from "../UI/Aside/Beds";
import {Button}   from "antd";
export default function Aside({
   setInfo,
   Info, 
   findHouses,
   findAllHouses,
  }) {
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
          <Calification setInfo={setInfo} Info={Info} />
          <People setInfo={setInfo} Info={Info} />
          <Beds setInfo={setInfo} Info={Info} />
          <Place setInfo={setInfo} Info={Info} />
          <Minprice setInfo={setInfo} Info={Info} />
          <div>
            <Button style={{marginRight:"3px"}} onClick={findHouses}>Filtro</Button>
            <Button onClick={findAllHouses}> Todos</Button>

          </div>
          
        </div>
      </div>
    </div>
  );
}
