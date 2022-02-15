import React, { useEffect } from "react";
import axios from "axios";
import useQuery from "../utils/Query";
import { message } from "antd";
import { URL_BACK } from "../config";
import { useHistory } from "react-router-dom";

const RegisterVerify = () => {
  const history = useHistory();
  let query = useQuery();
  const token = query.get("token");
  useEffect(() => {
    axios
      .post(`${URL_BACK}/user/verify?token=${token}`)
      .then((data) => {
        message.info(`${data.msg}`);
        setTimeout(() => {
          history.push("/");
        }, 5000);
      })
      .catch((data) => {
        message.error(`${data.message}`);
        setTimeout(() => {
          history.push("/");
        }, 5000);
      });
  }, [history, token]);

  return (
    <div>
      <h2>Registrando email</h2>
      <p>Redirigiendo al home...</p>
    </div>
  );
};

export default RegisterVerify;
