import React from "react";


export default function Pages({pages,actualPage,changePage}){
    var pageNumbers=[]
    for(let x=1 ;x<=pages ; x++ ){
        pageNumbers.push(x)
    }

    return(<div>
        {pageNumbers&&pageNumbers.map(e=><button key={e} onClick={(()=>changePage(e))}>{e}</button>)}
    </div>)
}