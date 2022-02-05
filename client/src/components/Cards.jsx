import React from "react";
import Carrousel from "../pseudoComponents/CarrouselCard.jsx"
import "../assets/css/Cards/Cards.css"
import { Image } from 'antd';
import { Typography, } from 'antd';
import { PushpinOutlined, DollarOutlined } from "@ant-design/icons"

const { Title, Text } = Typography;

export default function Cards({
  name,
  id,
  location,
  img,
  price,
}) {
  return (
    <div key={id} className="containerCards">
      <div className="divText">
        <h1 className="titleCards" level={2} >{name}</h1>
        <Text className="textCards"> <PushpinOutlined /> {location}</Text>
        <Text className="textCards"><DollarOutlined /> {price}</Text>
        {/* <Text className="textCards">5 estrellas</Text> */}
      </div>
      <div className="divImg">
        <Carrousel imgs={img}></Carrousel>
      </div>
    </div>
  );
}
