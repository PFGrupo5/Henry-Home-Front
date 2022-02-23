import React from "react";
import "../assets/css/Paginado/Paginado.scss";
import { message } from "antd"

export default function Pages({ pages, changePage, actualPage }) {
  var pageNumbers = [];
  for (let x = 1; x <= pages; x++) {
    pageNumbers.push(x);
  }

  let contador = 1;

  const prev = () => {
    contador--
    if (!(contador === 0)) {
      changePage(contador)
    } else {
      contador = 1;
      changePage(contador)
    }
  }
  const next = () => {
    contador++
    if (contador > pages) {
      message.info("Llegaste al final, lamentamos que no haya encontrado su viaje ideal.", 5)
      contador = pages;
      changePage(contador)
    } else {
      changePage(contador)
    }
  }

  return (
    <div className="allPaginado">
      <div className="ContainerPaginado">
        <button
          key={"prev"}
          onClick={() => prev()}
          className="BotonPaginado"
        >
          Anterior
        </button>
        <div>
          <span key={"current"} className="CurrentPaginado">
            {actualPage}
          </span>
        </div>
        <button
          key={"next"}
          onClick={() => next()}
          className="BotonPaginado"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
