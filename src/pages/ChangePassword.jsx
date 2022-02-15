import React, { useState } from "react";
// import { useJwt } from "react-jwt";
import useQuery from "../utils/Query";
import { message } from "antd";
import { URL_BACK } from "../config";
import { useHistory } from "react-router-dom";
// import jwt from "jsonwebtoken";
import jwt from "jwt-decode";
import axios from "axios";
import { ValidateForm } from "../utils/ValidateForm";

const ChangePassword = () => {
  const [inputForm, setInputForm] = useState({
    inputPassword: "",
    confirmPassword: "",
    role: "Client",
  });
  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();
  let query = useQuery();
  const token = query.get("token");
  const { email } = jwt(token);

  const inputFormHanlder = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors(ValidateForm({ ...inputForm, [name]: value }));
  };

  const changePasswordHandler = (e) => {
    e.preventDefault();
    if (formErrors.confirmPassword || formErrors.inputPassword)
      return message.error("Error con los datos");
    const newUserPassword = {
      role: "Client",
      email,
      newPassword: inputForm.inputPassword,
    };
    axios
      .put(`${URL_BACK}/user/change-password`, newUserPassword)
      .then(({ data }) => {
        console.log(data);
        message.success(data.msg);
        history.push("/")
      })
      .catch((error) => {
        console.log(error);
        message.error(error.response);
      });
  };
  return (
    <div>
      <form onSubmit={changePasswordHandler}>
        <p>Cambiar contraseña</p>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            name="inputPassword"
            onChange={inputFormHanlder}
            value={inputForm.inputPassword}
          />
          <p className="error-message">
            {formErrors.inputPassword ? formErrors.inputPassword : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <input
            type="password"
            placeholder="Repetir contraseña"
            name="confirmPassword"
            onChange={inputFormHanlder}
            value={inputForm.confirmPassword}
          />
          <p className="error-message">
            {formErrors.confirmPassword ? formErrors.confirmPassword : "ㅤㅤ"}
          </p>
        </div>
        <button onClick={changePasswordHandler}>Confirmar</button>
      </form>
    </div>
  );
};
export default ChangePassword;
