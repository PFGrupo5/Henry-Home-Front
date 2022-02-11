import React from "react";
import { useState } from "react";
import LogInForm from "./Ant forms/logInForm";
import RegisterForm from "./FormRegister";
import "../../assets/pseudoCss/Form/Form.css";

export default function Formulario({ nombre, landing }) {
  const [active, setActive] = useState("right-panel-active");

  function openSignIn() {
    setActive((state) => (state = "right-panel-disabled"));
  }

  function openSignUp() {
    setActive((state) => (state = "right-panel-active"));
  }

  if (landing) {
    return (
      <div className={`form-container ${active} ${nombre}`}>

        {/* <!-- Sign Up --> */}
        <LogInForm />

        {/* <!-- Sign In --> */}
        <RegisterForm />

        {/* <!-- Overlay --> */}
        <div class="container__overlay">
          <div class="overlay">
            <div class="overlay__panel overlay--left">
              <button class="formBtn" id="signIn" onClick={openSignIn}>
                Sign In
              </button>
            </div>
            <div class="overlay__panel overlay--right">
              <button class="formBtn" id="signUp" onClick={openSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (nombre === "SignIn") {
      return <LogInForm />;
    } else {
      return <RegisterForm />;
    }
  }
}