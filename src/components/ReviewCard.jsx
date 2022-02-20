import axios from "axios";
import React from "react";
import "../assets/css/ReviewsCards/ReviewsCards.scss"
import { URL_BACK } from "../config";

export default function ReviewCard ({
    funcion,
    token,
    user,
   review,
})
{
    var estrellas = ""
    for(let x=1;x<=review?.stars;x++){
        estrellas+="⭐"
    }
    var fecha = review?.updatedAt.split("T")
     fecha = fecha[0]

    const borrar = async()=>{
        try{
           var json = await axios.delete(`${URL_BACK}/reviews`,{
                headers: {
                  Authorization: token,
                },
                data: { id: review.id },
              })
             if (json.data) funcion()

        }catch(error){console.log(error)}
        
    }

    

     if(!user || user!==review.userClientId){
        return(

            <div className="Reviews-div">
                {!user && <button onClick={borrar} className="deleteReview"> X </button> }
                <p className="fecha-review2">{fecha}</p>
            <p className="estrellas-review">{estrellas}</p>
            <br/>
            <p >{review?.userClient.firstName} {review?.userClient.lastName}:</p>
            <div styles={{display:"flex"}} > 
            <span className="description-review">{review?.description}</span>
            </div>
    
            </div>
        )
     }
     return (<div></div>)
    
}