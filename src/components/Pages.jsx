import React from "react";
import "../assets/css/Paginado/Paginado.scss";

export default function Pages({ pages, changePage, actualPage }) {
  var pageNumbers = [];
  for (let x = 1; x <= pages; x++) {
    pageNumbers.push(x);
  }

  console.log("pages",pages);
  var contador = 1;
  console.log("contador",contador)

  return (
    <div className="ContainerPaginado">
      <span
        key={"prev"}
        onClick={() => changePage(contador === 0 ? (contador = 1) : contador--)}
        className="BotonPaginado"
      >
        prev
      </span>
      <div>
        <span key={"current"} className="CurrentPaginado">
          {actualPage}
        </span>
      </div>
      <span
        key={"next"}
        onClick={() => changePage(contador > 2 ? (contador = 2) : contador++)}
        className="BotonPaginado"
      >
        next
      </span>
    </div>
  );
}
