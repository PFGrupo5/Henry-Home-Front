import React, { useRef, useState } from 'react';
import "antd/dist/antd.css";
import "../assets/css/Landing.css"

import { Carousel, Image, Row, Col } from 'antd';
import img1 from "../assets/img/h1.jfif"
import img2 from "../assets/img/h2.jfif"


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function LandingPage() {

    return (
        <div className='all'>
            <Carousel autoplay autoplaySpeed={5000}>
                <div>
                    <Image preview={false} pauseOnHover src={img1} className='img' />
                </div>
                <div>
                    <Image preview={false} pauseOnHover src={img2} className='img' />
                </div>
                <div>
                    <Image preview={false} pauseOnHover src={img1} className='img' />
                </div>
                <div>
                    <Image preview={false} pauseOnHover src={img2} className='img' />
                </div>
            </Carousel>
        </div >
    );
}

export default LandingPage;