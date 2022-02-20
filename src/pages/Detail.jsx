import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../FilesStore/Actions";
import Carrousel from "../UI/Carrousel";
import imgDefault from "../assets/img/HenryHome.png";
import { PushpinOutlined } from "@ant-design/icons";
import "../assets/css/Detail/Detail.scss";
import Reservation from "./Reservation2";
import IconProvider from "../utils/IconProvider";



export default function Detail() {

  const dispatch = useDispatch();
  const { id } = useParams()
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const { detail } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  if (!detail) return (<div>Cargando</div>)

  const { name, images, Location, numberOfPeople, houseRules } = detail
  return (
    <div className="house-datail">
      <div className="house-datail-container">
        <div>
          <h2>{name}</h2>
          <p>Publicado por {detail.userMod.firstName}</p>
        </div>
        <div className="carrousel-conteiner">
          <img src={images[0]} alt="" width="1020px"/>
          {/* <Carrousel
            imgs={images ? images : [imgDefault]}
            dotsBool={true}
            styles="imgDetail"
          /> */}
        </div>
        <div className="info-container">
          <div>
            <div className="location-container">
              <PushpinOutlined /> {detail.Location ? `Ubicación: ${Location.name}` : null}
            </div>
            <div className="description-container">
              <h3>Descriptión</h3>
              <p>{detail.description}</p>
              <h4>Reglas de la casa:</h4>
              <p>{houseRules}</p>
              <div className="icon-center">
                <p>Cantidad de camas: {detail.numberOfBeds}</p>
                <span> {IconProvider("bed")}</span>
              </div>
              <div className="icon-center">
                <p>Cantidad maxima de personas: {numberOfPeople} </p>
                {IconProvider("people")}
              </div>
            </div>
            <div>
              <h3>¿Que ofrece este lugar?</h3>
              <div className="facilities-services-container">
                <div>
                  <h4>Instalaciones</h4>
                  <div className="icons-fs-grid">
                    {detail.Facilities?.map((e) => (<div key={e.id} className="icon-fs-container">  {IconProvider(e.name)} {e.name} </div>)
                    )}
                  </div>
                </div>
                <div>
                  <h4>Servicios</h4>
                  {detail.Services?.map((e) => (<div key={e.id} className="icon-fs-container">  {IconProvider(e.name)} {e.name} </div>))}
                </div>
              </div>
            </div>
          </div>
          <img src={detail.image || ""} alt="" width="300px"/>
          <Reservation id={id} user={user} />
        </div>
      </div>
    </div>

  );
}