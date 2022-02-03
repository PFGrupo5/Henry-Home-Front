import React from 'react';
import { Button } from "antd"
import "../assets/pseudoCss/Button/Button.css"

function Buttons({ text, styles, types, click, href }) {
    return (
        <Button
            style={styles}
            type={types}
            onClick={click}
            block
            className='btn'
            href={href}
        >
            {text}
        </Button>
    );
}

export default Buttons;
