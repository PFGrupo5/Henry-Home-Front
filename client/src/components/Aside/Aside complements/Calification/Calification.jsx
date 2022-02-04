import React from "react";
import "antd/dist/antd.css";
import { Cascader } from "antd";

export default function Calification() {
  const options = [
    {
      value: "oneStar",
      label: "⭐",
    },
    {
      value: "twoStar",
      label: "⭐⭐",
    },
    {
      value: "threeStar",
      label: "⭐⭐⭐",
    },
    {
      value: "fourStar",
      label: "⭐⭐⭐⭐",
    },
    {
      value: "fiveStar",
      label: "⭐⭐⭐⭐⭐",
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
        placeholder="Calification..."
      />
    </div>
  );
}
