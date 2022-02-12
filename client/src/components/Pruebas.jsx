import React, {useEffect} from "react";
import { adminStatus, createHouse, getHotels } from "../FilesStore/Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
export default function Pruebas  (){
//name": "Hobbiton",
//*"pricePerNight": 5,
//*"numberOfPeople": 3,
    const dispatch = useDispatch();
    const allHotels = useSelector((state) => state.hotels);
    var c=0
    var creacion = {name:"holaaa"+c,pricePerNight:4,numberOfPeople:3,services: ["pool"],
    facilities: ["tv", "wifi"],}
    var status= {id:"6ed7126d-5ac9-4038-b078-5800a52e871d",status:"Accepted"}
    const HandleClick=()=>{
        dispatch(createHouse(creacion))
       
    }
    const HandleClick2=()=>{
        dispatch(adminStatus(status))
        
    }

    useEffect(() => {
      dispatch(getHotels(1,50));
      
    }, [dispatch]);
    return (
        <div>
            <h1>Pruebas</h1>
            {allHotels.map(e=><div><h1>{e.name}</h1><h4>{e.status}</h4></div>)}
            <button onClick={e=>HandleClick()}>Create</button>
            <button onClick={e=>HandleClick2()}>Status</button>
        </div>
    )

    
}