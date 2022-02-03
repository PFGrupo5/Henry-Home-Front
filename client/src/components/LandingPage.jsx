import React from "react";
import "antd/dist/antd.css";
import "../assets/css/Landing/Landing.css";

import { Carousel, Image } from "antd";
import img1 from "../assets/img/h1.jfif";
import img2 from "../assets/img/h2.jfif";

function LandingPage() {
  return (
    <div className="all">
      <Carousel autoplay autoplaySpeed={5000}>
        <div>
          <Image preview={false} pauseOnHover src={img1} className="img" />
        </div>
        <div>
          <Image preview={false} pauseOnHover src={img2} className="img" />
        </div>
        <div>
          <Image preview={false} pauseOnHover src={img1} className="img" />
        </div>
        <div>
          <Image preview={false} pauseOnHover src={img2} className="img" />
        </div>
      </Carousel>
    </div>
  );
}

export default LandingPage;
