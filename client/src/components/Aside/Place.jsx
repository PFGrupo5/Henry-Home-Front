import React from "react";
import "antd/dist/antd.css";
import { Cascader } from "antd";

export default function Place() {
  const provinces = [
    "Buenos Aires",
    "Capital Federal",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ];

  const options = provinces.map((e) => {
    return { input: e, label: e };
  });

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
