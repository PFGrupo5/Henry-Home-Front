import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../FilesStore/Actions";
import Carrousel from "../pseudoComponents/Carrousel";
import imgDefault from "../assets/img/HenryHome.png";
import { Typography } from "antd";
import { PushpinOutlined, DollarOutlined } from "@ant-design/icons";
import "../assets/css/Detail/Detail.css";
import NavBar from "./NavBar";

const { Title, Text } = Typography;

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props]);

  let hotel = useSelector((state) => state.detail);
  return (
    <div className="allDetail">
      <div className="navbar">
        <NavBar />
      </div>
      <Title className="title">{hotel.name}</Title>
      <div className="carrouselConteiner">
        <Carrousel
          imgs={hotel.images ? hotel.images : [imgDefault]}
          dotsBool={true}
          styles="imgDetail"
        />
      </div>
      <div className="description">
        <Text>{hotel.description}</Text>
        <Text>
          {" "}
          <PushpinOutlined /> {hotel.Location ? hotel.Location.name : null}
        </Text>
        <Text>
          {" "}
          <DollarOutlined /> {hotel.pricePerNight}
        </Text>
      </div>
      <div className="facilities">
        {hotel.Facilities?.map((e) => {
          return <Text>{e.name} </Text>;
        })}
      </div>
      <div className="services">
        {hotel.Services?.map((e) => {
          return <Text>{e.name} </Text>;
        })}
      </div>

      <div className="reservar">
        <button>Reservar</button>
      </div>

      <div className="back">
        <button>Go back</button>
      </div>
    </div>
  );
}
