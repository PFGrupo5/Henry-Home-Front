import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import "../assets/css/ReviewsCards/ReviewsCards.scss"
import { URL_BACK } from "../config";
import { Popup } from "./PopUpReview";
import { Link } from "react-router-dom";
import iconProvider from "../utils/IconProvider";


export default function ReviewCard({
    dash,
    token,
    user,

    review,
    actualizar,
}) {
    const [popup, setpopup] = useState(false)
    const configpop = (e) => {

        setpopup(!popup)
    }


    var estrellas = ""
    for (let x = 1; x <= review?.stars; x++) {
        estrellas += "⭐"
    }
    var fecha = moment(review?.updatedAt).fromNow()


    const borrar = async () => {
        try {
            var json = await axios.delete(`${URL_BACK}/reviews`, {
                headers: {
                    Authorization: token,
                },
                data: { id: review.id },
            })
            if (json.data) actualizar()

        } catch (error) { console.log(error) }

    }

    // dashboard User
    if(dash){
        return(
        <div className="Reviews-div">
            <div className="botoncitos">
            {!user && <button onClick={borrar} className="deleteReview">{iconProvider("delete")}</button> }
            {!user && <button className="modificar" onClick={configpop}>{iconProvider("edit")}</button> }
            {!popup && <p className="fecha-review2">{fecha}</p>}
            </div>
        
        {!user && <Popup setReview={actualizar} setpopup={configpop} token={token} review={review}  e={popup}/> }
    {!popup&&<>
    
    <p className="estrellas-review">{estrellas}</p>
    <br/>
    <p >{review?.Housing?.name} :</p>
    <div styles={{display:"flex"}} > 
    <Link to={`/home/${review?.Housing?.id}`} >
    <img src={review?.Housing?.images[0]} alt="Imagen de la casa"/>
    </Link>
    
    <span className="description-review">{review?.description}</span>
    </div>
    </>
    }
    

            </div>
        )
    }
    // Detail
    if (!user || user !== review.userClientId) {
        return (

            <div  className="Reviews-div">
                <div className="botoncitos">
                    
            {!popup && <p className="fecha-review2">{fecha}</p>}
            {!user && <button onClick={borrar} className="deleteReview">{iconProvider("delete")}</button> }
            {!user && <button className="modificar" onClick={configpop}>{iconProvider("edit")}</button> }
            </div>
                {!user && <Popup setReview={actualizar} setpopup={configpop} token={token} review={review}  e={popup}/> }
            {!popup&&<>
            <p className="estrellas-review">{estrellas}</p>
            <br/>
            <p >{review?.userClient?.firstName} {review?.userClient?.lastName} :</p>
            <div styles={{display:"flex"}} > 
            <div className="description-review">{review?.description}</div>
            </div>
            </>
            }
            
    
            </div>
        )
    }
    return (<div></div>)

}