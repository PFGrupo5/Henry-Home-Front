import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Cards from "./Cards";
import { getHotels } from '../FilesStore/Actions/index.js';

import hoteles from "../harcodeado.json"

export default function Home() {

  const dispatch = useDispatch()
  const allHotels = useSelector((state) => state)
  console.log(allHotels)

  useEffect(() => {
    dispatch(getHotels())
    console.log(allHotels)
  }, [])

  return (
    <div>
      {
        hoteles.map((e) => {
          return (
            <Cards
              name={e.name}
              id={e.id}
              location={e.location}
              img={e.images}
              price={e.pricePerNight}
            />
          )
        })
      }
    </div>
  );
}
