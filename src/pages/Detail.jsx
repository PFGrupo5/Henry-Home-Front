import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../FilesStore/Actions";
import Carrousel from "../UI/Carrousel";
import imgDefault from "../assets/img/HenryHome.png";

import { PushpinOutlined, DollarOutlined } from "@ant-design/icons";
import "../assets/css/Detail/Detail.scss";
import ReviewCard from "../components/ReviewCard";



export default function Detail() {

  const dispatch = useDispatch();
  const { id } = useParams()
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const { detail } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id ]);

  if (!detail) return (<div>Cargando</div>)

  const {  name, pricePerNight, images, Location } = detail
  return (
    <div className="house-datail">
      <div className="house-datail-container">
        {/* <div className={"isOwner"}>
        <Link to={`/home/${id}/editar`}>
          <button>Editar</button>
          </Link>
        </div> */}
        <h2>{name}</h2>
        <p>Publicado por {detail.userMod.firstName}</p>
        <div className="carrousel-conteiner">
          <Carrousel
            imgs={images ? images : [imgDefault]}
            dotsBool={true}
            styles="imgDetail"
          />
        </div>
        <div className="location-container">
          <PushpinOutlined /> {detail.Location ? `Ubicación: ${Location.name}` : null}
        </div>
        <div className="description-container">
          <h3>Descriptión</h3>
          <p>{detail.description}</p>
          <div className="price-per-night-container">
            <DollarOutlined />
            <p>Precio por noche: {pricePerNight}</p>
          </div>
          <p>Cantidad de camas: {detail.numberOfBeds}</p>
        </div>
        <div >
          <h3>¿Que ofrece este lugar?</h3>
          <div className="facilities-services-container">
            <div>
              <h4>Instalaciones</h4>
              {detail.Facilities?.map((e) => {
                return <p className="p-detail"> - {e.name} </p>;
              })}
            </div>
            <div>
              <h4>Servicios</h4>
              {detail.Services?.map((e) => {
                return <p className="p-detail"> - {e.name} </p>;
              })}
            </div>
          </div>
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
        </div>
        {
          user ? (<Link to={`/home/${id}/reservation`}>
            <button className="reservar">Reservar</button>
          </Link>) : (<div>
            <p className="need-login">Necesitas estar logeado para reservar</p>
          </div>)
        }
        <div className="btnDetail">
        </div>
      </div>

    </div>

  );
}