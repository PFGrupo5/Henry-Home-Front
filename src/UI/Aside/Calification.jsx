import React from "react";
import { Cascader } from "antd";
import "../../assets/css/Aside/Components/Aside-components.scss";

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
    <div className="filter">
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Calification..."
      />
    </div>
  );
}
