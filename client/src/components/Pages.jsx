import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../FilesStore/Actions/index.js";

export default function Pages({pages,actualPage,changePage}){
    var pageNumbers=[]
    for(let x=1 ;x<=pages ; x++ ){
        pageNumbers.push(x)
    }

    return(<div>
        {pageNumbers&&pageNumbers.map(e=><button key={e} onClick={(()=>changePage(e))}>{e}</button>)}
    </div>)
}