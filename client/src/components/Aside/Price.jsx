import React from "react";
import "antd/dist/antd.css";
import { Cascader } from "antd";
import "../../assets/css/Aside/Components/Aside-components.css";

export default function Price() {
  const options = [
    {
      value: "0-15",
      label: "Hasta $15000",
    },
    {
      value: "15-30",
      label: "$15000 a $30000",
    },
    {
      value: "30-45",
      label: "$30000 a $45000",
    },
    {
      value: "45-60",
      label: "$45000 a $60000",
    },
    {
      value: "60up",
      label: "Más de $60000",
    },
  ];

  function onChange(value) {
    console.log(value);
  }

  return (
    <div className="filter">
      <Cascader options={options} onChange={onChange} placeholder="Price..." />
    </div>
  );
}
