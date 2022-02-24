import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../FilesStore/Actions";
import { PushpinOutlined } from "@ant-design/icons";
import "../assets/css/Detail/Detail.scss";
import ReviewCard from "../components/ReviewCard";
import Loading from "../components/Loading";
import Reservation from "./Reservation2";
import IconProvider from "../utils/IconProvider";
import axios from "axios";
import { URL_BACK } from "../config";
import ImagesDetail from "../components/ImagesDetail";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detail } = useSelector((state) => state);
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  if (user) {
    const find = detail?.Reviews.length
      ? detail.Reviews.filter((e) => e.userClientId === user.result.id)
      : [];
    var comprobante = find.length ? true : false;
    var reviewpropia = find[0];
  }

  const [reviewDetail, setReviewDetail] = useState({
    stars: 1,
    description: "",
  });
  const onChangeDescription = (e) => {
    setReviewDetail({
      ...reviewDetail,
      description: e.target.value,
    });
    if (reviewDetail.description.length <= 160) {
      setReview();
    } else {
      setReview(-1);
    }
    console.log(reviewDetail);
  };

  const [haveReview, sethaveReview] = useState(1);
  const setReview = (e) => {
    if (e) {
      sethaveReview(-1);
    } else {
      sethaveReview(haveReview + 1);
    }
  };
  console.log(haveReview);

  const onClick = async (e) => {
    e.preventDefault();
    if (reviewDetail.description.length <= 160) {
      try {
        await axios.post(
          `${URL_BACK}/reviews`,
          {
            stars: reviewDetail.stars,
            description: reviewDetail.description,
            id_hotel: detail.id,
          },
          {
            headers: {
              Authorization: user.token,
            },
          }
        );
        setReviewDetail({
          stars: 1,
          description: "",
        });
        setReview();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onChangeStarsMore = (e) => {
    e.preventDefault();

    if (reviewDetail.stars < 5)
      setReviewDetail({
        ...reviewDetail,
        stars: reviewDetail.stars + 1,
      });
  };
  const onChangeStarsLess = (e) => {
    e.preventDefault();
    if (reviewDetail.stars > 1)
      setReviewDetail({
        ...reviewDetail,
        stars: reviewDetail.stars - 1,
      });
  };

  useEffect(() => {
    dispatch(getDetail(id));

  }, [dispatch, id, reviewDetail, haveReview]);


  if (!detail) return (<Loading />)

  const { name, images, Location, numberOfPeople, houseRules } = detail;

  let imgs = images.filter((e) => e !== null);
  console.log("name", images);
  return (
    <div className="house-datail">
      <div className="house-datail-container">
        <div>
          <h2>{name}</h2>
          <p>Publicado por {detail.userMod.firstName}</p>
        </div>
        <div className="carrousel-conteiner">
          <ImagesDetail images={imgs} />
        </div>
        <div className="info-container">
          <div>
            <div className="location-container">
              <PushpinOutlined />{" "}
              {detail.Location ? `Ubicación: ${Location.name}` : null}
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
            <div className="sectionsFS">
              <h3>¿Que ofrece este lugar?</h3>
              <div className="facilities-services-container">
                <div>
                  <h4>Instalaciones</h4>
                  <div className="icons-fs-grid">
                    {detail.Facilities?.map((e) => (
                      <div key={e.id} className="icon-fs-container">
                        {" "}
                        {IconProvider(e.name)} {e.name}{" "}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4>Servicios</h4>
                  {detail.Services?.map((e) => (
                    <div key={e.id} className="icon-fs-container">
                      {/* {" "} */}
                      {IconProvider(e.name)} {e.name}{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Reservation id={id} user={user} />
        </div>
        <div className="reviews-container">
          {detail.average > 0 && <h3>Promedio: {detail.average}</h3>}
          <h3>Reseñas: </h3>
          {user &&
            user.result.role === "Client" &&
            (comprobante ? (
              <div>
                <h4>Tu Reseña:</h4>
                <ReviewCard
                  actualizar={setReview}
                  token={user.token}
                  review={reviewpropia}
                />
              </div>
            ) : (
              <div>
                <h4>¿Quieres redactar una reseña?</h4>
                <form>
                  <div>
                    <div>
                      <>Estrellas:</>

                      <button onClick={onChangeStarsLess} className="changeStars"><MinusCircleOutlined /></button>
                      <>{reviewDetail.stars}</>
                      <button onClick={onChangeStarsMore} className="changeStars"><PlusCircleOutlined /></button>
                    </div>
                    <div>
                      <textarea
                        placeholder="Description (160 char max)"
                        onChange={(e) => onChangeDescription(e)}
                        value={reviewDetail.description}
                        className="textareaReview"
                      ></textarea>
                      {haveReview < 0 && (
                        <p className="error">
                          Ha excedido el limite de caracteres
                        </p>
                      )}
                    </div>
                    <button className="publicar" onClick={onClick}>Publicar</button>
                  </div>
                </form>
              </div>
            ))}
          {user?.result.role === "Client" ? <h4>Resto de reseñas:</h4> : null}
          <div>
            {detail.Reviews.length ? (
              detail.Reviews.map((e) => (
                <ReviewCard
                  user={user?.result.id ? user.result.id : true}
                  review={e}
                />
              ))
            ) : (
              <p>
                {" "}
                El establecimiento no tiene reseñas por el momento{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
