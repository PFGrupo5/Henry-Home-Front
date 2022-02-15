import React from "react";
import { Carousel, Image } from "antd";
import "antd/dist/antd.css";

function Carrousels({ imgs, dotsBool, styles }) {
    return (

        <Carousel dots={dotsBool} autoplay autoplaySpeed={4000}>
            {imgs.map((i) => {
                return (
                    <div>
                        <Image preview={false} src={i} className={styles} />
                    </div>
                );
            })}
        </Carousel>

    );
}

export default Carrousels;