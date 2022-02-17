import { URL_BACK } from "../config"

export default function filterUrl(page,size,query){
    
   var URL= URL_BACK + "/houses?" + "page=" + page + "&size=" + size
    console.log("1: ",URL)
   if(query){
    if(query.status){
        URL += "&status=" + query.status
    }
    if(query.minPrice){
        URL += "&minPrice=" + query.minPrice
    }
    if(query.maxPrice){
        URL += "&maxPrice=" + query.maxPrice
    }
    if(query.location){
        URL += "&location=" + query.location
    }
    if(query.stars){
        URL += "&stars=" + query.stars
    }
    if(query.numberOfPeople){
        URL += "&numberOfPeople=" + query.numberOfPeople
    }
    if(query.numberOfBeds){
        URL += "&numberOfBeds=" + query.numberOfBeds
    }

   }

   return URL
}
