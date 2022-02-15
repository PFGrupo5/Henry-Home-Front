import React, { useEffect } from "react";
import Form from "../components/Form";
import NavBar2 from "../components/NavBar2";
import TitleContainer from "../components/TitleContainer";
import img1 from "../assets/img/Landing Page 1.jpg";
import img2 from "../assets/img/Landing Page 2.jpg";
import img3 from "../assets/img/Landing Page 3.jpg";
import Carrousel from "../UI/Carrousel";

import Footer from "../components/Footer";
import "../assets/css/LandingPage2/LandingPage2.scss";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { cleanError } from "../FilesStore/Actions";

const LandingPage2 = () => {

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
      <Carrousel imgs={[img1, img2, img3]} dotsBool={true} styles="img" />
      <TitleContainer/>
      <Form />
      <Footer />
    </div>
  );
};

export default LandingPage2;
