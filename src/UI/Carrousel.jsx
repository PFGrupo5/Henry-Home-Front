import React from "react";
import { Carousel, Image } from "antd";
import "antd/dist/antd.css";

function Carrousels({ imgs, dotsBool, styles, preview = false }) {
    return (
        <Carousel dots={dotsBool} autoplay autoplaySpeed={4000}>
            {imgs?.map((i, index) => {
                return (
                    <div key={index}>
                        <Image src={i} preview={preview} className={styles} width="200px" />
                    </div>
                );
            })}
        </Carousel>

    );
}

export default Carrousels;