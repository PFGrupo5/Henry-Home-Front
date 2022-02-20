import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import "../assets/css/ReviewsCards/ReviewsCards.scss"
import { URL_BACK } from "../config";
import { Popup } from "./PopUpReview";

export default function ReviewCard ({
    funcion,
    token,
    user,
   review,
   setReview,
})
{   
    
    const [popup , setpopup] = useState(false)
    const configpop= (e)=>{
        setpopup(!popup)
    }

       
    var estrellas = ""
    for(let x=1;x<=review?.stars;x++){
        estrellas+="⭐"
    }
    var fecha = moment(review?.updatedAt).fromNow()
    
     
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
                {!user && <button className="modificar" onClick={configpop}> Modificar </button> }
                {!user && <Popup setReview={setReview} setpopup={configpop} token={token} review={review}  e={popup}/> }
            {!popup&&<>
            <p className="fecha-review2">{fecha}</p>
            <p className="estrellas-review">{estrellas}</p>
            <br/>
            <p >{review?.userClient.firstName} {review?.userClient.lastName}:</p>
            <div styles={{display:"flex"}} > 
            <span className="description-review">{review?.description}</span>
            </div>
            </>
            }
            
    
            </div>
        )
     }
     return (<div></div>)
    
}