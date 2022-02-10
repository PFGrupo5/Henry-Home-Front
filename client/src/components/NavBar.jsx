import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Modal } from "antd";
import { SearchOutlined, SolutionOutlined } from "@ant-design/icons";

import "../assets/css/NavBar/NavBar.css";
import "antd/dist/antd.css";

import Logo from "../assets/img/HenryHome.png";
import Button from "../pseudoComponents/Button.jsx";
import { Selects } from "../pseudoComponents/Input.jsx";

const navBtn = {
  fontSize: 15,
};

const modalBtn = {
  fontSize: 15,
  width: 100,
};

export default function NavBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const showSearch = () => {
    setIsSearchVisible(true);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  const goToLogIn = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth", 
    });
  };

  const provincias = [
    "buenos aires",
    "catamarca",
    "chaco",
    "chubut",
    "cordoba",
    "corrientes",
    "entre rios",
    "formosa",
    "jujuy",
    "la pampa",
    "la rioja",
    "mendoza",
    "misiones",
    "neuquen",
    "río negro",
    "salta",
    "san juan",
    "san luis",
    "santa cruz",
    "santa fe",
    "santiago del estero",
    "tierra del fuego",
    "tucuman",
  ];

  return (
    <div className="allNav">
      <Row gutter={20}>
        {/* ---------------- Logo ---------------- */}

        <Col span={3}>
          <Link to="/">
            <Image className="navLogo" preview={false} src={Logo} />
          </Link>
        </Col>

        {/* ---------------- Desktop Version ---------------- */}

        <Col className="navInput" offset={6} span={0} sm={0} md={8} lg={8}>
          <Selects options={provincias} />
        </Col>

        <Col className="navBtn" xs={0} sm={0} md={6} lg={6}>
          <Button
            styles={navBtn}
            click={goToLogIn}
            types="ghost"
            text="Sign In"
          />
        </Col>

        {/* ---------------- Mobile version ---------------- */}

        <Col
          xs={{ span: 3, offset: 9 }}
          sm={{ span: 3, offset: 15 }}
          md={0}
          lg={0}
        >
          <SearchOutlined className="navIcon" onClick={showSearch} />
        </Col>

        <Col
          xs={{ span: 3, offset: 0 }}
          sm={{ span: 3, offset: 0 }}
          md={0}
          lg={0}
        >
          <SolutionOutlined className="navIcon" onClick={goToLogIn} />
        </Col>
      </Row>

      <Modal
        title="Search..."
        visible={isSearchVisible}
        onOk={closeSearch}
        onCancel={closeSearch}
        footer={[
          <Button
            styles={modalBtn}
            click={closeSearch}
            types="ghost"
            text="Return"
          />,
          <Button
            styles={modalBtn}
            click={closeSearch}
            types="ghost"
            text="Search"
          />,
        ]}
      >
        <Selects options={provincias} />
      </Modal>
    </div>
  );
}
