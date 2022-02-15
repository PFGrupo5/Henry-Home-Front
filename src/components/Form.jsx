import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignUp, googleLogIn, SignIn } from "../FilesStore/Actions/index";
import { ValidateForm } from "../utils/ValidateForm";
import { message } from "antd";
import { GoogleLogin } from "react-google-login";
import "../assets/css/Form/Form.scss";
import * as Unicons from "@iconscout/react-unicons";
import axios from "axios";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputForm, setInputForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inputPassword: "",
    confirmPassword: "",
    role: "Client",
  });

  const [formErrors, setFormErrors] = useState({});

  const [login, setLogin] = useState(true);

  const inputFormHanlder = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors(ValidateForm({ ...inputForm, [name]: value }));
  };

  const registerHandler = (e) => {
    e.preventDefault();

    if (!Object.keys(ValidateForm(inputForm)).length) {
      message.success("E-mail de confirmación enviado!");
      dispatch(SignUp(inputForm));
      clear();
    } else {
      message.error("Error con los datos");
    }
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (!inputForm.email.trim().length) {
      return message.error("Colocar Email");
    }
    if (!inputForm.inputPassword.trim().length) {
      return message.error("Colocar Contraseña");
    }
    if (formErrors.email || formErrors.inputPassword)
      return message.error("Error con los datos");
    const userSignIn = {
      email: inputForm.email,
      inputPassword: inputForm.inputPassword,
      role: "Client",
    };
    dispatch(SignIn(userSignIn, history));
    clear();
  };

  const forgotPasswordHandler = async () => {
    if (!inputForm.email.trim().length) return message.info("Colocar email");
    const { data } = axios.post("ruta", inputForm.email);
    if (data) {
      message.success("E-mail enviado para restaurar contraseña");
    } else {
      message.error("E-mail no registrado");
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(googleLogIn(result, token));
      history.push("/home");
      window.location.replace("");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log("googleError", error);
  };
  const clear = () => {
    setInputForm({
      firstName: "",
      lastName: "",
      email: "",
      inputPassword: "",
      confirmPassword: "",
      role: "Client",
    });
  };

  return (
    <div id="registro" className="container-form">
      <form className="content-form">
        <div className="register-container">
          <h2 onClick={() => setLogin(!login)}>Registro</h2>
          <div>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={inputFormHanlder}
              value={inputForm.email}
            />
            <p className="error-message">
              {formErrors.email ? formErrors.email : "ㅤㅤ"}
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              name="firstName"
              onChange={inputFormHanlder}
              value={inputForm.firstName}
            />
            <p className="error-message">
              {formErrors.firstName ? formErrors.firstName : "ㅤㅤ"}
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Apellido"
              name="lastName"
              onChange={inputFormHanlder}
              value={inputForm.lastName}
            />
            <p className="error-message">
              {formErrors.lastName ? formErrors.lastName : "ㅤㅤ"}
            </p>
          </div>
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
          <button onClick={registerHandler}>Registro</button>
        </div>
        <div className={`ingreso-container ${login ? "translate" : ""}`}>
          <h2 onClick={() => setLogin(!login)}>Ingresar</h2>
          <div>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={inputForm.email}
              onChange={inputFormHanlder}
            />
            <p className="error-message">
              {formErrors.email ? formErrors.email : "ㅤㅤ"}
            </p>
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              name="inputPassword"
              value={inputForm.inputPassword}
              onChange={inputFormHanlder}
            />
            <p className="error-message">
              {formErrors.inputPassword ? formErrors.inputPassword : "ㅤㅤ"}
            </p>
          </div>
          <p onClick={forgotPasswordHandler}>¿Olvidaste la contraseña?</p>
          <button onClick={loginHandler}>Ingresar</button>
          <GoogleLogin
            clientId="109526159096-dk6c06q28lkm7uq041ievngdekh1p8k2.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                id="google-btn"
              >
                <Unicons.UilGoogle />
                Ingresar con Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
