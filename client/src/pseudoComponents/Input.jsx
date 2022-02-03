import React from 'react';
import { Input } from "antd"
import "../assets/pseudoCss/Input/Input.css"

const { Search } = Input;

function Inputs() {
    return <Input className='input' placeholder="Search..." />;
}

export default Inputs;
