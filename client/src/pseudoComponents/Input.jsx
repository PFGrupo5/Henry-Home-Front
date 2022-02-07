import React from 'react';
import { Input, Select } from "antd"
import "../assets/pseudoCss/Input/Input.css"
const { Option } = Select;


export function Inputs() {
    return <Input className='input' placeholder="Search..." />;
}

export function Selects({ options }) {
    return (
        <Select className='select'
            placeholder="Search by provinces..."
            showSearch
            optionFilterProp='children'
        >
            {options.map((i) => {
                let mayus = i.charAt(0).toUpperCase() + i.slice(1);
                return (
                    <Option value={i}>{mayus}</Option>
                )
            })}
        </Select >
    );
}