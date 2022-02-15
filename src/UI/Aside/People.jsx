import React from "react";
import "antd/dist/antd.css";
import { Cascader } from "antd";
import "../../assets/css/Aside/Components/Aside-components.scss";

export default function People() {
  const options = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
  ];

  function onChange(value) {
    console.log(value);
  }

  return (
    <div className="filter">
      <Cascader options={options} onChange={onChange} placeholder="People..." />
    </div>
  );
}
