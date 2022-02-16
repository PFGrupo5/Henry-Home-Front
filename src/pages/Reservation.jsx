import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../FilesStore/Actions";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { isWithinInterval } from "date-fns";
import moment from "moment";
import axios from "axios";
import { message } from "antd";
import NavBar2 from "../components/NavBar2";
import "../assets/css/Reservation/Reservation.scss";
import { useHistory } from "react-router-dom";
import { URL_BACK } from "../config";

const daysCalculator = (dates) => {
  if (dates.length === 1) return 1;
  const initialDate = moment(dates[0]);
  const finalDate = moment(dates[1]);

  return finalDate.diff(initialDate, "days") !== 0
    ? finalDate.diff(initialDate, "days")
    : 1;
};

const Reservation = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { detail } = useSelector((state) => state);
  const { name, pricePerNight } = detail;
  const [value, onChange] = useState(new Date());
  const [days, setDates] = useState(1);
  const [payment, setPayment] = useState(null);
  const [display, setDisplay] = useState(false);
  const { id } = props.match.params;
  const { token } = JSON.parse(localStorage.getItem("profile"));
  const userId = JSON.parse(localStorage.getItem("profile")).result.id;

  useEffect(() => {
    dispatch(getDetail(id));
    setDates(daysCalculator(value));
  }, [value, dispatch, id]);

  if (!Object.keys(detail).length) return <div>Loading</div>;

  let userReservations = detail.Reservations?.filter(
    (r) => r.userClientId === userId
  ).find((s) => s.status === "Pending");


if(userReservations === undefined){
  userReservations = {}
}


  let disabledRanges = detail.Reservations?.map(({ date_start, date_end }) => [
    new Date(date_start),
    new Date(date_end),
  ]);
  disabledRanges = [
    ...disabledRanges,
    [new Date("1600-01-01"), new Date(Date.now() - 8.64e7)],
  ];

  function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }
  function isWithinRanges(date, ranges) {
    return ranges.some((range) => isWithinRange(date, range));
  }

  function tileDisabled({ date, view }) {
    if (view === "month") {
      return isWithinRanges(date, disabledRanges);
    }
  }

  const reservationHandler = () => {
    const reservation = {
      id_hotel: id,
      date_start: value[0],
      date_end: value[1],
      detail: "No se que va aca",
      title: name,
    };
    if (Object.keys(userReservations).length) {
      message.info(
        "Todavia tienen una reserva pendiente con este alojamiento, redirigiendo a su perfil"
      );
      setTimeout(() => {
        history.push(`/user/${id}`);
      }, 5000);
      setPayment(userReservations.link_mercado_pago);
      setDisplay(true);
    } else {
      axios
        .post(`${URL_BACK}/reservation`, reservation, {
          headers: { authorization: token },
        })
        .then(({ data }) => {
          message.success(data.message);
          setPayment(data.linkPay);
          setDisplay(true);
        })
        .catch((error) => message.error(error.response.data.message));
    }
  };
  const dateForm = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) {
      return `${day}-0${month}-${year}`;
    } else {
      return `${day}-${month}-${year}`;
    }
  };

  return (
    <div>
      <NavBar2 />
      <div className="reservation-container">
        <div>
          <div>
            <h2>Reserva</h2>
          </div>
          <div className="information-container">
            <h3>{name}</h3>
            <div>
              <h4>Precio por noche: ${pricePerNight} ARS</h4>
              <div>
                <h4>Fecha de reserva</h4>
                <Calendar
                  onChange={onChange}
                  value={value}
                  selectRange
                  tileDisabled={tileDisabled}
                  className="calendar"
                />
              </div>
              <div>
                <p>
                  {value[0] ? (
                    <>
                      Del <span>{`${dateForm(value[0])}`}</span> al{" "}
                      <span>{`${dateForm(value[1])}`}</span>
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div>Total ${pricePerNight * days} ARS </div>
              <button
                className={`btn-confirm ${!display ? "display" : ""}`}
                onClick={reservationHandler}
              >
                Confirmar reserva
              </button>
              <a href={`${payment}`}>
                <button className={`btn-pay ${display ? "display" : ""}`}>
                  Pagar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
