import React from "react";
import { Carousel, Image } from "antd";
import "antd/dist/antd.css";

function Carrousels({ imgs, dotsBool, styles }) {
    console.log(imgs)
    return (

        <Carousel dots={dotsBool} autoplay autoplaySpeed={4000}>
            {imgs.map((i,index) => {
                return (
                    <div key={index}>
                        <Image src={i} className={styles} width="200px"/>
                    </div>
                );
            })}
        </Carousel>

    );
}

export default Carrousels;