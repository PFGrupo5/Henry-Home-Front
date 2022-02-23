import * as Unicons from "@iconscout/react-unicons";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { /* SignUp, */ googleLogIn, SignIn } from "../FilesStore/Actions/index";
import { ValidateForm } from "../utils/ValidateForm";
import { GoogleLogin } from "react-google-login";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import { URL_BACK } from "../config";
import "../assets/css/Form/Form.scss";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID


const Form = ({ role, google }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputForm, setInputForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inputPassword: "",
    confirmPassword: "",
    role,
  });

  const [formErrors, setFormErrors] = useState({});
  const [passwordView, setPasswordView] = useState("password")
  const [passwordConfirm, setPasswordConfirm] = useState("password")

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
      axios
        .post(`${URL_BACK}/user/register`, inputForm)
        .then(({ data }) => {
          console.log({ data });
          message.success(data.message);
        })
        .catch((error) => {
          message.error(error.response.data.message);
        });
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
      role: role,
    };
    dispatch(SignIn(userSignIn, history));
    clear();
  };

  const forgotPasswordHandler = async () => {
    if (!inputForm.email.trim().length) return message.info("Colocar email");
    console.log(inputForm.email);
    axios
      .post(`${URL_BACK}/user/confirm-update-password`, { email: inputForm.email })
      .then(() => {
        message.success("Correo enviado");
      })
      .catch((error) => {
        console.log(error.response.data, "aca");
        message.error(error.response.data.message);
      });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;

    try {
      dispatch(googleLogIn(result, "Client"));
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
      role: role,
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
          <div className="passInput">
            <input
              type={passwordView}
              placeholder="Contraseña"
              name="inputPassword"
              onChange={inputFormHanlder}
              value={inputForm.inputPassword}
            />
            {
              passwordView === "text" ?
                <EyeOutlined
                  className="passIcon"
                  onClick={() => {
                    setPasswordView("password")
                  }} />
                :
                <EyeInvisibleOutlined
                  className="passIcon"
                  onClick={() => {
                    setPasswordView("text")
                  }} />
            }
            <p className="error-message">
              {formErrors.inputPassword ? formErrors.inputPassword : "ㅤㅤ"}
            </p>
          </div>
          <div className="passInput">
            <input
              type={passwordConfirm}
              placeholder="Repetir contraseña"
              name="confirmPassword"
              onChange={inputFormHanlder}
              value={inputForm.confirmPassword}
            />
            {
              passwordConfirm === "text" ?
                <EyeOutlined
                  className="passIcon"
                  onClick={() => {
                    setPasswordConfirm("password")
                  }} />
                :
                <EyeInvisibleOutlined
                  className="passIcon"
                  onClick={() => {
                    setPasswordConfirm("text")
                  }} />
            }
            <p className="error-message">
              {formErrors.confirmPassword ? formErrors.confirmPassword : "ㅤㅤ"}
            </p>
          </div>
          <button type="button" onClick={registerHandler}>Registro</button>
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
          <div className="passInput">
            <input
              type={passwordView}
              placeholder="Contraseña"
              name="inputPassword"
              value={inputForm.inputPassword}
              onChange={inputFormHanlder}
            />
            {
              passwordView === "text" ?
                <EyeOutlined
                  className="passIcon"
                  onClick={() => {
                    setPasswordView("password")
                  }} />
                :
                <EyeInvisibleOutlined
                  className="passIcon"
                  onClick={() => {
                    setPasswordView("text")
                  }} />
            }
            <p className="error-message">
              {formErrors.inputPassword ? formErrors.inputPassword : "ㅤㅤ"}
            </p>
          </div>
          <p onClick={forgotPasswordHandler}>¿Olvidaste la contraseña?</p>
          <button type="button" onClick={loginHandler}>Ingresar</button>
          {
            google &&
            <GoogleLogin
              clientId={CLIENT_ID}
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
          }
        </div>
      </form>
    </div>
  );
};

export default Form;
