import React from "react";
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
  detail,
  price,
  role,
  onClickFav,
}) {
  const renderName = name.length <= 12 ? name : `${name.slice(0, 12)}...`
  var favsIds = detail && detail.favs ? detail.favs.map(e => e.id) : 0;
  const favState = favsIds?.length && favsIds?.includes(id)

  return (
    <div key={id} className="containerCards">

      <div className="divText">
        {
          role === "Client" &&
          <button className="stars" onClick={() => onClickFav(id, favState)}>
            {favState ? "💖" : "🤍"}
          </button>
        }
        <Link to={`/home/${id}`} >
          <h1 className="titleCards" level={2} >
            {renderName}
          </h1>
        </Link>

        {location ? <Text className="textCards"> <PushpinOutlined /> {location}</Text> : ''}
        <Text className="textCards"><DollarOutlined /> {price}</Text>
      </div>

      <div className="divImg">
        <Carrousel imgs={img} dotsBool={false} styles="imgCard"></Carrousel>
      </div>

    </div>
  );
}
