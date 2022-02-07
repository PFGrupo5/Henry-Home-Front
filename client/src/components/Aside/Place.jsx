import React from "react";
import "antd/dist/antd.css";
import { Cascader } from "antd";

export default function Place() {
  const options = [
    {
      value: "Cordoba",
      label: "Cordoba",
    },
    {
      value: "Buenos Aires",
      label: "Buenos Aires",
    },
    {
      value: "Santa Fe",
      label: "Santa Fe",
    },
    {
      value: "Misiones",
      label: "Misiones",
    },
    {
      value: "Rio Negro",
      label: "Rio Negro",
    },
  ];

  function onChange(value) {
    console.log(value);
  }

  return (
    <div>
      <Cascader
        className="filter"
        options={options}
        onChange={onChange}
        placeholder="Location..."
      />
    </div>
  );
}
