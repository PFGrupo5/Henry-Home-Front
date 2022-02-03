import React, { useState } from 'react';
import { Row, Col, Image, Modal } from "antd"
import { SearchOutlined, SolutionOutlined } from '@ant-design/icons';

import "../assets/css/NavBar/NavBar.css"
import "antd/dist/antd.css";

import Logo from "../assets/img/HenryHome.png"
import Button from "../pseudoComponents/Button.jsx"
import Input from "../pseudoComponents/Input.jsx"

const Style = {
    fontSize: 15
}

export default function NavBar() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className='allNav'>
            <Row gutter={20}>
                {/* ---------------- Logo ---------------- */}

                <Col span={3}>
                    <Image className="navLogo" preview={false} src={Logo} />
                </Col>

                {/* ---------------- Desktop Version ---------------- */}

                <Col className="navInput" span={0} sm={0} md={15} lg={15}>
                    <Input />
                </Col>

                <Col className="navBtn" xs={0} sm={0} md={3} lg={3}>
                    <Button styles={Style} click={showModal} types="ghost" text="Sign In" />
                </Col>

                <Col className="navBtn" xs={0} sm={0} md={3} lg={3}>
                    <Button styles={Style} click={showModal} types="ghost" text="Register" />
                </Col>

                {/* ---------------- Mobile version ---------------- */}

                <Col xs={{ span: 6, offset: 9 }} sm={{ span: 3, offset: 15 }} md={0} lg={0}>
                    <SearchOutlined className='navIcon' />
                </Col>

                <Col xs={{ span: 6, offset: 0 }} sm={{ span: 3, offset: 0 }} md={0} lg={0}>
                    <SolutionOutlined className='navIcon' />
                </Col>

            </Row >

            <Modal title="Basic Modal" visible={isModalVisible} onOk={closeModal} onCancel={closeModal}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

        </div >
    );
}
