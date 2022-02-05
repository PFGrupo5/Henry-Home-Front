import React from 'react';
import { Input, Select } from "antd"
import "../assets/pseudoCss/Input/Input.css"

// const { Search } = Input;

export function Inputs() {
    return <Input className='input' placeholder="Search..." />;
}

export function Selects({ options }) {
    const { Option } = Select;
    return (
        <Select className='select'
            placeholder="Search by provinces..."
            showSearch
            optionFilterProp='children'
            mode="multiple"
            dropdownStyle="input"
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