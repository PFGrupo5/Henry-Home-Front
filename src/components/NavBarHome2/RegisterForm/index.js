import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { URL_BACK } from "../../../config";
import { ValidateForm } from "../../../utils/ValidateForm";

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
        .catch((err) => console.log(err.response.data));
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
      <div className="inputContainer">
        <input
          name="inputPassword"
          type="password"
          placeholder="Contreseña"
          onChange={inputFormHandler}
          value={registerData.inputPassword}
        />
        <p className="error-message">
          {formErrors.inputPassword ? formErrors.inputPassword : "ㅤㅤ"}
        </p>
      </div>
      <div className="inputContainer">
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar contraseña"
          onChange={inputFormHandler}
          value={registerData.confirmPassword}
        />
        <p className="error-message">
          {formErrors.confirmPassword ? formErrors.confirmPassword : "ㅤㅤ"}
        </p>
      </div>
      <button onClick={register} className="NavBarHome_loginBtn">
        Registrarse
      </button>
    </form>
  );
};
export default RegisterForm;
