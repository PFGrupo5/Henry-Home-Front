import React, { useState } from "react";
import Carrousel from "../UI/Carrousel"
import { Link } from "react-router-dom";
import "../assets/css/Cards/Cards.scss"
import { Typography } from 'antd';
import { PushpinOutlined, DollarOutlined } from "@ant-design/icons"

const { Text } = Typography;

export default function Cards({
  name,
  id,
  location,
  img,
  price,
  favs,
  click,
  role,

}) {
  const renderName = name.length <= 12 ? name : `${name.slice(0, 12)}...`
  const [excusa, setExcusa] = useState(favs)
  return (
    <div key={id} className="containerCards">
      <div className="divText">

        <Link to={`/home/${id}`} >
          <h1 className="titleCards" level={2} >
            {renderName}
          </h1>
        </Link>

        {
          role === "Client" &&
          <button onClick={() => click(excusa, id, setExcusa)}>
            {excusa < 0 ? "agregar" : "borrar"}
          </button>
        }

        <Text className="textCards"> <PushpinOutlined /> {location}</Text>
        <Text className="textCards"><DollarOutlined /> {price}</Text>

      </div>
      <div className="divImg">
        <Carrousel imgs={img} dotsBool={false} styles="imgCard"></Carrousel>
      </div>
    </div>
  );
}
