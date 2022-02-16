import React, { useState } from "react";
import useQuery from "../utils/Query";
import { message } from "antd";
import { URL_BACK } from "../config";
import { useHistory } from "react-router-dom";
import jwt from "jwt-decode";
import axios from "axios";
import { ValidateForm } from "../utils/ValidateForm";
import "../assets/css/ChangePassword/ChangePassword.scss";
import NavBar2 from "../components/NavBar2";

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
        message.success(data.message);
        setTimeout(() => {
          history.push("/");
        },3000);
      })
      .catch((error) => {
        console.log(error);
        message.error(error.response);
      });
  };
  return (
    <div>
      <NavBar2 />
      <div className="change-password-container">
        <form onSubmit={changePasswordHandler}>
          <h2>Cambiar contraseña</h2>
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
    </div>
  );
};
export default ChangePassword;
