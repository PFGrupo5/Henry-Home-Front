import React from 'react';
import { Button } from "antd"
import "../assets/pseudoCss/Button/Button.css"

function Buttons({ text, styles, types, click, href, htmlType = null }) {
    return (
        <Button
            style={styles}
            type={types}
            onClick={click}
            block
            className='btn'
            href={href}
            htmlType={htmlType}
        >
            {text}
        </Button>
    );
}

export default Buttons;
