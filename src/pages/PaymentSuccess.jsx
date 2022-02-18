import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useQuery from "../utils/Query";
import { message } from "antd";
import { URL_BACK } from "../config";
import { useHistory } from "react-router-dom";
import "../assets/css/RegisterVerify/RegisterVerify.scss";
// import NavBar2 from "../components/NavBar2";
import NavBarHome2 from "../components/NavBarHome2/NavBarHome2";

const PaymentSuccess = () => {
  const history = useHistory();
  let query = useQuery();
  const preference_id = query.get("preference_id");
  const collection_status = query.get("collection_status");
  const [num, setNum] = useState(5);
  const [sendReservation, setSendReservation] = useState(true);

  const intervalRef = useRef();
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    if (sendReservation) {
      axios
        .put(`${URL_BACK}/reservation/`, {
          id: preference_id,
          status: collection_status,
        })
        .then(({ data }) => {
          message.success(data.message);
          setSendReservation(false);
        })
        .catch((error) => {
          console.log(error);
          message.error(error.response.data.message);
        });
    }

    if (num <= 0) history.push("/");
    return () => clearInterval(intervalRef.current);
  }, [num, history, collection_status, preference_id, sendReservation]);

  console.log(preference_id);
  console.log(collection_status);

  return (
    <div className="register-verify-container">
      <NavBarHome2 />
      <div>
        <h2>Reserva confirmada</h2>
        <p>Redirigiendo al home en {num}...</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
