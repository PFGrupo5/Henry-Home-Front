import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignUp, googleLogIn, SignIn } from "../FilesStore/Actions/index";
import { ValidateForm } from "../utils/ValidateForm";
import { message } from "antd";
import { GoogleLogin } from "react-google-login";
import "../assets/css/Form/Form.css";

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

  const [login, setLogin] = useState(false);

  const inputFormHanlder = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    const userSignIn = {
      email: inputForm.email,
      inputPassword: inputForm.inputPassword,
      role: "Client",
    };
    dispatch(SignIn(userSignIn, history));
    clear();
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
    <div className="container-form">
      <form className="content-form">
        <div className="register-container">
          <h2 id="registro" onClick={() => setLogin(!login)}>
            Registro
          </h2>
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value=""
            onChange={inputFormHanlder}
            value={inputForm.email}
          />
          <input
            type="text"
            placeholder="Nombre"
            name="firstName"
            value=""
            onChange={inputFormHanlder}
            value={inputForm.firstName}
          />
          <input
            type="text"
            placeholder="Apellido"
            name="lastName"
            value=""
            onChange={inputFormHanlder}
            value={inputForm.lastName}
          />
          <input
            type="text"
            placeholder="Contraseña"
            name="inputPassword"
            value=""
            onChange={inputFormHanlder}
            value={inputForm.inputPassword}
          />
          <input
            type="text"
            placeholder="Repetir contraseña"
            name="confirmPassword"
            value=""
            onChange={inputFormHanlder}
            value={inputForm.confirmPassword}
          />
          <button onClick={registerHandler}>Registro</button>
        </div>
        <div className={`ingreso-container ${login ? "translate" : ""}`}>
          <h2 id="registro" onClick={() => setLogin(!login)}>
            Ingresar
          </h2>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={inputForm.email}
            onChange={inputFormHanlder}
          />
          <input
            type="text"
            placeholder="Contraseña"
            name="inputPassword"
            value={inputForm.inputPassword}
            onChange={inputFormHanlder}
          />
          <button onClick={loginHandler}>Ingresar</button>
          <GoogleLogin
            clientId="109526159096-dk6c06q28lkm7uq041ievngdekh1p8k2.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className=""
              >
                Google
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
