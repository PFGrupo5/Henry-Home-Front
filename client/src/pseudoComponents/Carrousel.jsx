import React from 'react';
import { Carousel, Image } from 'antd';
import "antd/dist/antd.css";

function Carrousels({ imgs }) {
    return (
        <Carousel autoplay autoplaySpeed={5000}>
            {imgs.map((i) => {
                return (
                    <div>
                        <Image preview={false} src={i} className='img' />
                    </div>
                )
            })}
        </Carousel>
    );
}

export default Carrousels;
