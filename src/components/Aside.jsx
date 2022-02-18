import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "../assets/css/Aside/Aside.scss";
import Calification from "../UI/Aside/Calification";
import People from "../UI/Aside/People";
import Place from "../UI/Aside/Place";
import Minprice from "../UI/Aside/Price";
import Beds from "../UI/Aside/Beds";
import { Button } from "antd";
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
    <div className="aside-container">
      <div className="filter-container">
        <div>
          <h2>Filtrar</h2>
        </div>
        <Place setInfo={setInfo} Info={Info} className="filter" />
        <People setInfo={setInfo} Info={Info} className="filter" />
        <Beds setInfo={setInfo} Info={Info} className="filter" />
        <Calification setInfo={setInfo} Info={Info} className="filter" />
        <Minprice setInfo={setInfo} Info={Info} className="filter" />
        <div className="btn-container">
          <button onClick={findHouses} className="filtrar">Filtrar</button>
          <button onClick={findAllHouses}> Resetear</button>
        </div>
      </div>
    </div >
  );
}
