import React from "react";
import '../assets/css/Paginado/Paginado.css'

export default function Pages({ pages, actualPage, changePage }) {
  var pageNumbers = [];
  for (let x = 1; x <= pages; x++) {
    pageNumbers.push(x);
  }

  return (
    <div className="ContainerPaginado">
      {pageNumbers &&
        pageNumbers.map((e) => (
          <button key={e} onClick={() => changePage(e)} className="BotonPaginado">
            {e}
          </button>
        ))}
    </div>
  );
}
