import React from "react";
import Carrousel from "../pseudoComponents/Carrousel.jsx"
import "../assets/css/Cards/Cards.css"
import { Image } from 'antd';


export default function Cards({
  name,
  id,
  location,
  img,
  price,

}) {
  console.log(img)
  return (
    <div key={id} className="ContainerCards">
      <h1 className="name">{name}</h1>
      <img src={img} alt="casa" className="imagen" />
      <h3 className="location">{location}</h3>
      <p className="precio">{price}</p>
    </div>
  );
}
