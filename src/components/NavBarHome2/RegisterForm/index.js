import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { URL_BACK } from "../../../config";
import { ValidateForm } from "../../../utils/ValidateForm";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"


const RegisterForm = ({ setDisplay }) => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    inputPassword: "",
    confirmPassword: "",
    email: "",
    role: "Client",
  });

  const [formErrors, setFormErrors] = useState({});

  const [passwordView, setPasswordView] = useState("password")
  const [passwordConfirm, setPasswordConfirm] = useState("password")

  const register = () => {
    if (!Object.keys(formErrors).length) {
      axios
        .post(`${URL_BACK}/user/register`, registerData)
        .then(({ data }) => {
          message.success(data.message);
          setRegisterData({
            firstName: "",
            lastName: "",
            inputPassword: "",
            confirmPassword: "",
            email: "",
            role: "Client",
          });
          setDisplay(false);
        })
        .catch((err) => {
          console.log(err.response.data);
          message.error(err.response.data.message);
          setDisplay(false);
        });
    } else {
      message.error("Error con los datos");
    }
  };
  const inputFormHandler = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
    setFormErrors(ValidateForm({ ...registerData, [name]: value }));
  };
  console.log(formErrors);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Registro</h3>
      <div className="inputContainer">
        <input
          name="email"
          onChange={inputFormHandler}
          type="email"
          placeholder="Email"
          value={registerData.email}
        />
        <p className="error-message">
          {formErrors.email ? formErrors.email : "ㅤㅤ"}
        </p>
      </div>
      <div className="inputContainer">
        <input
          name="firstName"
          type="text"
          placeholder="Nombre"
          onChange={inputFormHandler}
          value={registerData.firstName}
        />
        <p className="error-message">
          {formErrors.firstName ? formErrors.firstName : "ㅤㅤ"}
        </p>
      </div>
      <div className="inputContainer">
        <input
          name="lastName"
          type="text"
          placeholder="Apellido"
          onChange={inputFormHandler}
          value={registerData.lastName}
        />
        <p className="error-message">
          {formErrors.lastName ? formErrors.lastName : "ㅤㅤ"}
        </p>
      </div>

      <div className="inputContainer passNav">
        <input
          name="inputPassword"
          type={passwordView}
          placeholder="Contraseña"
          onChange={inputFormHandler}
          value={registerData.inputPassword}
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

      <div className="inputContainer passNav">
        <input
          name="confirmPassword"
          type={passwordConfirm}
          placeholder="Confirmar contraseña"
          onChange={inputFormHandler}
          value={registerData.confirmPassword}
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
      <div className="btn-container-navbar">
        <button onClick={register} className="NavBarHome_loginBtn">
          Registrarse
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
