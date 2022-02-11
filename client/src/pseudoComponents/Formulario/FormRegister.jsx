import React, { useEffect, useState } from "react";
import "../../assets/pseudoCss/Form/Form Register/formRegister.css";
import { EyeOutlined } from "@ant-design/icons";

function FormRegister() {
  const InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    inputPasword: "",
    confirmPassword: "",
    role: "",
  };

  const [FormsValue, setFormsValue] = useState(InitialValues);
  const [FormsErrors, setFormsErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormsValue({ ...FormsValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormsErrors(validate(FormsValue));
    setIsSubmit(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowPass((prevstate) => !prevstate);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setShowPass2((prevstate) => !prevstate);
  };

  const handleCheckbox = (e) => {
    const { name, value } = e.target;
    setFormsValue({ ...FormsValue, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email format";
    }
    if (!values.Password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more thanthan 4 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Password is required!";
    } else if (values.confirmpassword.length < 4) {
      errors.confirmpassword = "Password must be more than 4 characters";
    } else if (values.confirmpassword.length > 10) {
      errors.confirmpassword =
        "Password cannot exceed more thanthan 4 characters";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(FormsErrors).length === 0 && isSubmit) {
      console.log(FormsValue);
    }
  }, [FormsValue, FormsErrors, isSubmit]);

  return (
    <div className="ContainerContainer">
      <form onSubmit={handleSubmit}>
        <h1 className="Login">register</h1>
        <div className="divider"></div>
        <div className="containerForm">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={FormsValue.name}
              onChange={handleChange}
              className="inputForm"
            />
            <p>{FormsErrors.name}</p>
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={FormsValue.lastName}
              onChange={handleChange}
              className="inputForm"
            />
            <p>{FormsErrors.lastname}</p>
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="E-Mail"
              value={FormsValue.email}
              onChange={handleChange}
              className="inputForm"
            />
            <p>{FormsErrors.email}</p>
          </div>
          <div>
            <input
              type={showPass ? "text" : "password"}
              name="inputPasword"
              placeholder="Password"
              value={FormsValue.pasword}
              onChange={handleChange}
              className="inputForm"
            />
            <button onClick={handleClick} className="SeePass">
              <EyeOutlined />
            </button>
            <p>{FormsErrors.pasword}</p>
          </div>
          <div>
            <input
              type={showPass2 ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={FormsValue.confirmPassword}
              onChange={handleChange}
              className="inputForm"
            />
            <button onClick={handleClick2} className="SeePass">
              <EyeOutlined />
            </button>
            <p>{FormsErrors.confirmpassword}</p>
          </div>
          <div className="CheckBox">
            <p className="client"> Cliente </p>
            <input
              onChange={(e) => handleCheckbox(e)}
              type="checkbox"
              name="role"
              value="Client"
              className="checkboxCli"
            />
            <p className="mod">Propietario</p>
            <input
              onChange={(e) => handleCheckbox(e)}
              type="checkbox"
              name="role"
              value="Moderator"
              className="checkboxMod"
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FormRegister;
