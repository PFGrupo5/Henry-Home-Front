import React from "react";
import { useState } from "react";
import LogInForm from "./logInForm";
import RegisterForm from "./registerForm";
import "../../assets/pseudoCss/Form/Form.css";

export default function Formulario({ nombre, landing }) {
  const [active, setActive] = useState("right-panel-active");

  function openSignIn() {
    setActive((state) => (state = "right-panel-disabled"));
  }

  function openSignUp() {
    setActive((state) => (state = "right-panel-active"));
  }

  return (
    <div className={`form-container ${active} ${nombre}`}>
      <div className="container-formularios">
        {active === "right-panel-disabled" ? (
          <LogInForm landing={landing} />
        ) : (
          <RegisterForm landing={landing} />
        )}
      </div>
      {/* <!-- Overlay --> */}
      <div className="container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="formBtn" id="signIn" onClick={openSignIn}>
              Log In
            </button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="formBtn" id="signUp" onClick={openSignUp}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
