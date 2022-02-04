import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Aside/Aside.css";
import Calification from "./Aside complements/Calification/Calification";
import Price from "./Aside complements/Price/Price";
import Place from "./Aside complements/Place/Place";
import People from "./Aside complements/People/People";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export default function Aside() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="filters">
      <Link to="#" className="menu-bars">
        <MenuOutlined onClick={showSidebar} className="menu-icons" />
      </Link>

      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CloseOutlined onClick={showSidebar} className="menu-icons-x" />
            </Link>
          </li>
          <Calification />
          <Price />
          <Place />
          <People />
        </ul>
      </div>
    </div>
  );
}
