import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/DashboardUser/DashboardUser.scss";
import Loading from "../components/Loading";
import { getLocations, getUserDetail } from "../FilesStore/Actions";
import defaultUser from "../assets/img/user_default.png";
import Cards from "../components/Cards";
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
import { URL_BACK } from "../config";
import { Link } from "react-router-dom";
import { Col, Popconfirm, Row } from "antd";

function DashboardUser() {
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const { userDetail } = useSelector((state) => state);
  const { locations } = useSelector((state) => state);
  const [actualizar, setActualizar] = useState(1);

  const actualiza = () => {
    setActualizar(actualizar + 1);
  };

  const deleteReservation = (id) => {
    axios
      .delete(`${URL_BACK}/reservation/${id}`)
      .then((res) => {
        dispatch(getUserDetail(user.result.id, user.result.role));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  function cancel(e) {
    console.log(e);
  }

  useEffect(() => {
    dispatch(getUserDetail(user.result.id, user.result.role));
    dispatch(getLocations());
  }, [dispatch, user.result.id, user.result.role, actualizar]);

  if (!userDetail) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="Container-General">
        <div>
          <div className="DashboardUser-userInfo">
            <img src={userDetail.profile_img || defaultUser} alt="" />
            <div>
              <p>Perfil</p>
              <p>{`${userDetail.firstName} ${userDetail.lastName}`}</p>
            </div>
          </div>
          <div className="Container-Favs">
            <h1 className="DashboardUser-section-Title" id="Favs-hotels">
              Hoteles Favoritos
            </h1>
            <div className="Favs-Cards">
              {userDetail.favs.length === 0 ? (
                <div>{`No Tienes Hotel Favorito :(`}</div>
              ) : (
                <div>
                  {userDetail.favs.map((f) => {
                    const location = locations?.find(
                      (e) => e.id === f.LocationId
                    );
                    return (
                      <Cards
                        name={f.name}
                        key={f.id}
                        id={f.id}
                        img={f.images}
                        price={f.pricePerNight}
                        location={location?.name}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="Container-Reservs">
            <h1 className="DashboardUser-section-Title">
              Ultimas reservaciones
            </h1>
            <div>
              {!userDetail?.Reservations.length ? (
                <div className="reservs">{`No Tienes Reservaciones Previas :(`}</div>
              ) : (
                <div className="DashboardUser_reservationInfo">
                  {console.log(userDetail.Reservations)}
                  <Row className="eachClass">
                    <Col className="eachSection" xs={0} sm={0} md={4} lg={4}>
                      Alojamiento
                    </Col>
                    <Col className="eachSection" xs={0} sm={0} md={4} lg={4}>
                      Fecha Inicio
                    </Col>
                    <Col className="eachSection" xs={0} sm={0} md={4} lg={4}>
                      Fecha Fin
                    </Col>
                    <Col className="eachSection" xs={0} sm={0} md={4} lg={4}>
                      Estado
                    </Col>
                    <Col className="eachSection" xs={0} sm={0} md={4} lg={4}>
                      Acciones
                    </Col>
                  </Row>
                  <div>
                    {userDetail.Reservations.map((f) => {
                      console.log(f);
                      return (
                        <div key={f.id} className="each-reservation">
                          <div className="mobile">
                            <Link to={`/home/${f.Housing?.id}`}>
                              <button className="buttonReservation changeColor">
                                {" "}
                                <div>{f.Housing?.name}</div>{" "}
                              </button>
                            </Link>
                            <div>Ingreso: {f.date_start}</div>
                            <div>Egreso: {f.date_end}</div>
                            <div>
                              {f.status === "Pending"
                                ? "Pendiente"
                                : "Aprobada"}
                            </div>
                            <div className="eachInfo">

                              <div className="userButtons">
                                <Link
                                  className="buttonReservation"
                                  to={`/home/${f.id_hotel}`}
                                >
                                  Ir a la casa
                                </Link>
                                <a
                                  className="buttonReservation"
                                  href={f.link_mercado_pago}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Pagar
                                </a>
<div className="userButtons" >
                                {f.status !== "approved" && (<a className="buttonReservation" href={f.link_mercado_pago} target='_blank' rel="noreferrer">Pagar</a>)}

                                <Popconfirm
                                  onConfirm={() => deleteReservation(f.id)}
                                  onCancel={cancel}
                                  title="¿Seguro que quieres eliminar esta reserva?"
                                  okText="Si"
                                  cancelText="No"
                                >
                                  <button
                                    className="buttonReservation"
                                    type="text"
                                  >
                                    Eliminar
                                  </button>
                                </Popconfirm>
                              </div>
                            </div>
                          </div>
                          <div className="desktop">
                            <div key={f.id}>
                              <Row className="eachInfo">
                                <Col xs={0} sm={0} md={4} lg={4}>
                                  {" "}
                                  <Link to={`/home/${f.Housing?.id}`}>
                                    <button className="buttonReservation changeColor">
                                      {f.Housing?.name}{" "}
                                    </button>
                                  </Link>
                                </Col>
                                <Col xs={0} sm={0} md={4} lg={4}>
                                  {" "}
                                  {f.date_start}
                                </Col>
                                <Col xs={0} sm={0} md={4} lg={4}>
                                  {" "}
                                  {f.date_end}
                                </Col>
                                <Col xs={0} sm={0} md={4} lg={4}>
                                  {f.status === "Pending"
                                    ? "Pendiente"
                                    : "Aprobada"}
                                </Col>
                                <Col xs={0} sm={0} md={4} lg={4}>
                                  <div className="userButtons">

                                    <a
                                      className="buttonReservation"
                                      href={f.link_mercado_pago}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Pagar
                                    </a>


                                    {f.status !== "approved" && (<a className="buttonReservation" href={f.link_mercado_pago} target='_blank' rel="noreferrer">Pagar</a>)}
                                    <Popconfirm
                                      onConfirm={() => deleteReservation(f.id)}
                                      onCancel={cancel}
                                      title="¿Seguro que quieres eliminar esta reserva?"
                                      okText="Si"
                                      cancelText="No"
                                    >
                                      <button
                                        className="buttonReservation"
                                        type="text"
                                      >
                                        Eliminar
                                      </button>
                                    </Popconfirm>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="reviews-container">
          <h3>Tus reseñas: </h3>
          {userDetail?.Reviews?.length ? (
            userDetail.Reviews.map((e) => (
              <ReviewCard
                actualizar={actualiza}
                review={e}
                dash={true}
                token={user.token}
              />
            ))
          ) : (
            <p> Aun no has redactado ninguna reseña </p>
          )}
        </div>
      </div>
    );
  }
}

export default DashboardUser;
