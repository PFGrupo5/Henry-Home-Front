import React from "react";
import "antd/dist/antd.css";
import { Cascader } from "antd";
import "../../assets/css/Aside/Components/Aside-components.scss";

export const provinces = [
  "All",
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

export default function Place({setInfo, Info}) {
  const options = provinces.map((e) => {
    if(e==="All"){return { input: e, label: e , value: null} }
    return { input: e, label: e ,value: e};
  });

  const locationChange = (e) => {
    setInfo({ ...Info, location: e[0] });
    console.log(Info)
  }

  return (

      <Cascader
        options={options}
        onChange={locationChange}
        placeholder="Ubicación..."
        className="filter"
      />

  );
}
