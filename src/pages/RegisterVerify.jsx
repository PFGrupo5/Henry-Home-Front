import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useQuery from "../utils/Query";
import { message } from "antd";
import { URL_BACK } from "../config";
import { useHistory } from "react-router-dom";
import "../assets/css/RegisterVerify/RegisterVerify.scss";
import NavBar2 from "../components/NavBar2";

const RegisterVerify = () => {
  const history = useHistory();
  let query = useQuery();
  const token = query.get("token");
  const [num, setNum] = useState(5);

  const intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    console.log(num);
    if (num <= 0) history.push("/");
    return () => clearInterval(intervalRef.current);
  }, [num, history]);
  useEffect(() => {
    axios
      .post(`${URL_BACK}/user/verify?token=${token}`)
      .then(({ data }) => {
        message.info(`${data.message}`);
        setTimeout(() => {
          history.push("/");
        }, 5000);
      })
      .catch((error) => {
        console.log(error.response.data);
        message.error(error.response.data);
        setTimeout(() => {
          history.push("/");
        }, 5000);
      });
  }, [history, token]);

  return (
    <div className="register-verify-container">
      <NavBar2 />
      <div>
        <h2>Registrando email</h2>
        <p>Redirigiendo al home en {num}...</p>
      </div>
    </div>
  );
};

export default RegisterVerify;
