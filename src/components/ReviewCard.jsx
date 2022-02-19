import React from "react";
import "../assets/css/ReviewsCards/ReviewsCards.scss"

export default function ReviewCard ({
   review
})
{
    var estrellas = ""
    for(let x=1;x<=review.stars;x++){
        estrellas+="⭐"
    }
    var fecha = review.updatedAt.split("T")
     fecha = fecha[0]
    return(
        <div className="Reviews-div">
            <p className="fecha-review">{fecha}</p>
        <p className="estrellas-review">{estrellas}</p>
        <br/>
        <p>{review.userClient.firstName} {review.userClient.lastName}:</p>
        <p className="description-review">{review.description}</p>

        </div>
    )
}