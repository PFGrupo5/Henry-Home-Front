import React from "react";
import Carrousel from "../UI/Carrousel"
import { Link } from "react-router-dom";
import "../assets/css/Cards/Cards.scss"
import { Typography } from 'antd';
import { PushpinOutlined, DollarOutlined, HeartTwoTone, HeartFilled } from "@ant-design/icons"

const { Text } = Typography;

export default function Cards({
  name,
  id,
  location,
  img,
  detail,
  price,
  role,
  onClickFav,
  average,
}) {
  const renderName = name.length <= 12 ? name : `${name.slice(0, 12)}...`
  var favsIds = detail && detail.favs ? detail.favs.map(e => e.id) : 0;
  const favState = favsIds?.length && favsIds?.includes(id)

  return (
    <div key={id} className="containerCards">

      <div className="divText">

        <Link to={`/home/${id}`} >
          <h1 className="titleCards" level={2} >
            {renderName}
          </h1>
        </Link>
        {average && average > 0 ? <Text className="textCards" >Estrellas: {average}</Text> : <Text className="textCards" >Estrellas: - </Text>}
        {location ? <Text className="textCards"> <PushpinOutlined /> {location.length <= 16 ? location : `${location.slice(0, 12)}...`}</Text> : ''}
        <Text className="textCards"><DollarOutlined /> {price}</Text>
      </div>

      {
        role === "Client" &&
        <button className="stars" onClick={() => onClickFav(id, favState)}>
          {favState ? <HeartFilled /> : <HeartTwoTone twoToneColor="#757d87" />}
        </button>
      }
      <div className="divImg">
        <Carrousel imgs={img} dotsBool={false} styles="imgCard"></Carrousel>
      </div>

    </div>
  );
}
