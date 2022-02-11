import React, { useEffect, useState } from "react";

function FormRegister() {
  const InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    inputPasword: "",
    confirmPassword: "",
    role: {
      Client: true,
      Moderator: "",
    },
  };

  const [FormsValue, setFormsValue] = useState(InitialValues);
  const [FormsErrors, setFormsErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [check, setCheck] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormsValue({ ...FormsValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormsErrors(validate(FormsValue));
    setIsSubmit(true);
    console.log(FormsValue);
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
    setCheck(([e.target.value] = e.target.checked));
    console.log(check)
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
  }, [FormsErrors]);

  return (
    <div className="ContainerForm">
      <form onSubmit={handleSubmit}>
        <h1>Log-In</h1>
        <div className="divider"></div>
        <div className="firstname">
          <label>First Name : </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={FormsValue.name}
            onChange={handleChange}
          />
          <p>{FormsErrors.name}</p>
        </div>
        <div className="lastname">
          <label>Last Name : </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={FormsValue.lastName}
            onChange={handleChange}
          />
          <p>{FormsErrors.lastname}</p>
        </div>
        <div className="email">
          <label>E-Mail : </label>
          <input
            type="text"
            name="email"
            placeholder="E-Mail"
            value={FormsValue.email}
            onChange={handleChange}
          />
          <p>{FormsErrors.email}</p>
        </div>
        <div className="password">
          <label>Password : </label>
          <input
            type={showPass ? "text" : "password"}
            name="inputPasword"
            placeholder="Password"
            value={FormsValue.pasword}
            onChange={handleChange}
          />
          <button className="ShowPanel" onClick={handleClick}>
            Show
          </button>
          <p>{FormsErrors.pasword}</p>
        </div>
        <div className="confirmPassword">
          <label>Confirm Password : </label>
          <input
            type={showPass2 ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={FormsValue.confirmPassword}
            onChange={handleChange}
          />
          <button className="ShowPanel2" onClick={handleClick2}>
            Show
          </button>
          <p>{FormsErrors.confirmpassword}</p>
        </div>
        <div className="rolecontainer">
          Client
          <input
            onChange={(e) => handleCheckbox(e)}
            type="checkbox"
            value="Client"
            checked={check.Client}
          />
          Moderator
          <input
            onChange={(e) => handleCheckbox(e)}
            type="checkbox"
            value="Moderator"
            checked={check.Moderator}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FormRegister;
