import React from "react";
import "../assets/css/Cards/Cards.css"


export default function Cards({
  name,
  id,
  location,
  img,
  price,

}) {
  return (
    <div key={id} className="ContainerCards">
      <h1 className="name">{name}</h1>
      <img src={img} alt="casa" className="imagen"/>
      <p className="location">{location}</p>
      <p className="precio">{price}</p>
    </div>
  );
}
