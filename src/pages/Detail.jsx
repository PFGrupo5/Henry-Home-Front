import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../FilesStore/Actions";
import Carrousel from "../UI/Carrousel";
import imgDefault from "../assets/img/HenryHome.png";
import { PushpinOutlined } from "@ant-design/icons";
import "../assets/css/Detail/Detail.scss";
<<<<<<< HEAD
import ReviewCard from "../components/ReviewCard";
=======
import Reservation from "./Reservation2";
import IconProvider from "../utils/IconProvider";
>>>>>>> 30765102bb46faf16af3ff9753fe890d0623181d



export default function Detail() {

  const dispatch = useDispatch();
  const { id } = useParams()
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const { detail } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  if (!detail) return (<div>Cargando</div>)

  const { name, images, Location, numberOfPeople, /* houseRules */ } = detail
  return (
    <div className="house-datail">
      <div className="house-datail-container">
        <div>
          <h2>{name}</h2>
          <p>Publicado por {detail.userMod.firstName}</p>
        </div>
        <div className="carrousel-conteiner">
          <Carrousel
            imgs={images ? images : [imgDefault]}
            dotsBool={true}
            styles="imgDetail"
          />
        </div>
        <div className="info-container">
          <div>
            <div className="location-container">
              <PushpinOutlined /> {detail.Location ? `Ubicación: ${Location.name}` : null}
            </div>
            <div className="description-container">
              <h3>Descriptión</h3>
              <p>{detail.description}</p>
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
                    {detail.Facilities?.map((e) => (<div className="icon-fs-container">  {IconProvider(e.name)} {e.name} </div>)
                    )}
                  </div>
                </div>
                <div>
                  <h4>Servicios</h4>
                  {detail.Services?.map((e) => (<div className="icon-fs-container">  {IconProvider(e.name)} {e.name} </div>))}
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          
        </div>
        {
          user ? (<Link to={`/home/${id}/reservation`}>
            <button className="reservar">Reservar</button>
          </Link>) : (<div>
            <p className="need-login">Necesitas estar logeado para reservar</p>
          </div>)
        }
        <div className="description-container">
            <h3>Reseñas: </h3>
            <div>
              {detail.Reviews.length ?
               detail.Reviews.map((e)=><ReviewCard
                review={e}
               />) :
              <p> El establecimiento no tiene reseñas de momento reseñas por el momento </p>
               }
            </div>

          </div>
        <div className="btnDetail">
=======
          <Reservation id={id} user={user} />
>>>>>>> 30765102bb46faf16af3ff9753fe890d0623181d
        </div>
      </div>
    </div>

  );
}