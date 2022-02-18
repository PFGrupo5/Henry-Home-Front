import React from "react";
import { Cascader } from "antd";
import "../../assets/css/Aside/Components/Aside-components.scss";

export default function Calification({setInfo, Info}) {
  const options = [
    {
      value: "0",
      label: "-",
    },
    {
      value: "1",
      label: "⭐",
    },
    {
      value: "2",
      label: "⭐⭐",
    },
    {
      value: "3",
      label: "⭐⭐⭐",
    },
    {
      value: "4",
      label: "⭐⭐⭐⭐",
    },
    {
      value: "5",
      label: "⭐⭐⭐⭐⭐",
    },
  ];

  const starsChange = (e) => {
    setInfo({ ...Info, stars: e[0] });
    console.log(Info)
  }

  return (

      <Cascader
        options={options}
        onChange={starsChange}
        placeholder="Calificación..."
        className="filter"
      />

  );
}
