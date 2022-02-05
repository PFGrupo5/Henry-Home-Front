import React from 'react';

import "antd/dist/antd.css";
import "../assets/css/Landing/Landing.css"
import img1 from "../assets/img/h1.jfif"
import img2 from "../assets/img/h2.jfif"
import NavBar from './NavBar';
import Carrousel from '../pseudoComponents/Carrousel'
import Button from '../pseudoComponents/Button'

const stylesButton = {
    backgroundColor: "#092c4cef",
    borderRadius: 10,
    fontSize: 25,
    paddingBottom: 40,
    width: "50%",
    fontWeight: 600,
}

function LandingPage() {
    return (
        <div>
            <NavBar />
            <div className='allHome'>
                <h1 className='textHome'>One click away from your new Journey</h1>
                <Button href="/home" className="btn" styles={stylesButton} types="ghost" text={"HOME"} />
            </div>
            <Carrousel imgs={[img1, img2, img1, img2]} />
        </div >
    );
}

export default LandingPage;