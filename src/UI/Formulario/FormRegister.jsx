import React, { useEffect, useState } from "react";
import "../../assets/pseudoCss/Form/FormRegister/formRegister.scss";
import { message } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { SignUp } from "../../FilesStore/Actions/index"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

function FormRegister() {

  // ------------------------------------------------------------------------------------------------------------------------------------
  // Const
  // ------------------------------------------------------------------------------------------------------------------------------------

  const InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    inputPassword: "",
    confirmPassword: "",
    role: "",
  };

  const [FormsValue, setFormsValue] = useState(InitialValues);
  const [FormsErrors, setFormsErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const history = useHistory()
  const dispatch = useDispatch()
  // ------------------------------------------------------------------------------------------------------------------------------------
  // Functions
  // ------------------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (Object.keys(FormsErrors).length === 0 && isSubmit) {
      message.success('Submit success!');
      dispatch(SignUp(FormsValue, history))
    }
  }, [FormsValue, FormsErrors, isSubmit, dispatch, history]);


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


  // ------------------------------------------------------------------------------------------------------------------------------------
  // Validate Function
  // ------------------------------------------------------------------------------------------------------------------------------------

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email format";
    }
    if (!values.inputPassword) {
      errors.inputPassword = "Password is required!";
    } else if (values.inputPassword.length < 4) {
      errors.inputPassword = "Password must be more than 4 characters";
    } else if (values.inputPassword.length > 10) {
      errors.inputPassword = "Password cannot exceed more than 4 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password is required!";
    } else if (values.confirmPassword.length < 4) {
      errors.confirmPassword = "Password must be more than 4 characters";
    } else if (values.confirmPassword.length > 10) {
      errors.confirmPassword =
        "Password cannot exceed more than 4 characters";
    } else if (values.confirmPassword !== values.inputPassword) {
      console.log("v1", values.confirmPassword, "v2", values.inputPassword)
      errors.confirmPassword =
        "Both passwords must be equal";
    }
    return errors;
  };

  // ------------------------------------------------------------------------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------------------------------------------------------------------------


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
            <p>{FormsErrors.firstName}</p>
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
            <p>{FormsErrors.lastName}</p>
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
              name="inputPassword"
              placeholder="Password"
              value={FormsValue.inputPassword}
              onChange={handleChange}
              className="inputForm"
            />
            <button onClick={handleClick} className="SeePass">
              <EyeOutlined />
            </button>
            <p>{FormsErrors.inputPasword}</p>
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
            <p>{FormsErrors.confirmPassword}</p>
          </div>
          <div className="CheckBox">
            Cliente
            <input
              onChange={(e) => handleCheckbox(e)}
              type="checkbox"
              name="role"
              value="Client"
            />
            Propietario
            <input
              onChange={(e) => handleCheckbox(e)}
              type="checkbox"
              name="role"
              value="Moderator"
            />
          </div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default FormRegister;
