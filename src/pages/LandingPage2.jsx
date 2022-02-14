import React from "react";
import Form from "../components/Form";
import NavBar2 from "../components/NavBar2";
import img1 from "../assets/img/Landing Page 1.jpg";
import img2 from "../assets/img/Landing Page 2.jpg";
import img3 from "../assets/img/Landing Page 3.jpg";
import Carrousel from "../UI/Carrousel";
import Button from "../UI/Button";
import Footer from "../components/Footer";
import "../assets/css/LandingPage2/LandingPage2.css"

const LandingPage2 = () => {
  const stylesButton = {
    backgroundColor: "#092c4cef",
    borderRadius: 10,
    fontSize: 25,
    width: "50%",
    fontWeight: 600,
  };
  return (
    <div>
      <NavBar2 />
      <div className="allHome">
        <h1 className="textHome">A un click de un nuevo viaje!</h1>
        <Button
          href="/home"
          className="btn"
          styles={stylesButton}
          types="ghost"
          text={"HOME"}
        />
      </div>
      <div className="carrousel-container">
      <Carrousel imgs={[img1, img2, img3]} dotsBool={true} styles="img" he />
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default LandingPage2;
