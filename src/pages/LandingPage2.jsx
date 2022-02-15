import React, { useEffect } from "react";
import Form from "../components/Form";
import NavBar2 from "../components/NavBar2";
import img1 from "../assets/img/Landing Page 1.jpg";
import img2 from "../assets/img/Landing Page 2.jpg";
import img3 from "../assets/img/Landing Page 3.jpg";
import Carrousel from "../UI/Carrousel";
import Button from "../UI/Button";
import Footer from "../components/Footer";
import "../assets/css/LandingPage2/LandingPage2.scss";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { cleanError } from "../FilesStore/Actions";

const LandingPage2 = () => {
  const stylesButton = {
    backgroundColor: "#f2994a",
    borderRadius: ".3rem",
    fontSize: 25,
    width: "150px",
    fontWeight: 500,
    color: "#fff",
    border: "none",
  };
  const { errors } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(errors).length) {
      message.error(errors.message);
      dispatch(cleanError());
    }
  }, [errors, dispatch]);

  return (
    <div className="landingPage-container">
      <NavBar2 />
      <Carrousel imgs={[img1, img2, img3]} dotsBool={true} styles="landingCarrousel" />
      <div className="title-container">
        <h2 className="textHome">A un click de una travesía!</h2>
        <Button
          href="/home"
          className="btn"
          styles={stylesButton}
          types="ghost"
          text={"HOME"}
        />
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default LandingPage2;
