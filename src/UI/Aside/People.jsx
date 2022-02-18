import React from "react";
import "antd/dist/antd.css";
import { Cascader } from "antd";
import "../../assets/css/Aside/Components/Aside-components.scss";

export default function People({ setInfo, Info }) {
  const options = [
    {
      value: 0,
      label: "-",
    },
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
    {
      value: "6",
      label: "6",
    },
    {
      value: "7",
      label: "7",
    },
    {
      value: "8",
      label: "8",
    },
  ];

  const peopleChange = (e) => {
    setInfo({ ...Info, numberOfPeople: e[0] });
    console.log(Info)
  }

  return (

    <Cascader name="numberOfPeople" options={options} onChange={peopleChange} placeholder="Número de personas..." className="filter" />

  );
}
