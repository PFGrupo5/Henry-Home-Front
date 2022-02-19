import React, { useEffect, useState } from "react";
import {  useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../FilesStore/Actions";
import Carrousel from "../UI/Carrousel";
import imgDefault from "../assets/img/HenryHome.png";
import { PushpinOutlined } from "@ant-design/icons";
import "../assets/css/Detail/Detail.scss";
import ReviewCard from "../components/ReviewCard";
import Reservation from "./Reservation2";
import IconProvider from "../utils/IconProvider";


export default function Detail() {

  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams()
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const { detail } = useSelector((state) => state);
  const find  = detail.Reviews.length ?
  detail.Reviews.filter((e)=>e.userClientId===User.result.id) : []
  var haveReview = find.length? true : false

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
          
        </div>
        {
          user ? (<Link to={`/home/${id}/reservation`}>
            <button className="reservar">Reservar</button>
          </Link>) : (<div>
            <p className="need-login">Necesitas estar logeado para reservar</p>
          </div>)
        }
        
        <div className="btnDetail">
          <Reservation id={id} user={user} />
        </div>
        <div className="reviews-container">
            <h3>Reseñas: </h3>
            {haveReview ? <div>
              <h4>Tu Reseña:</h4>
              <ReviewCard review={find[0]}/>
            </div> : <div>
              <h4>Quieres escribir una reseña?</h4>
            </div> }
            
            <div>
              {detail.Reviews.length ?
               detail.Reviews.map((e)=><ReviewCard
                review={e}
               />) :
              <p> El establecimiento no tiene reseñas de momento reseñas por el momento </p>
               }
            </div>


          </div>
      </div>
    </div>

  );
}