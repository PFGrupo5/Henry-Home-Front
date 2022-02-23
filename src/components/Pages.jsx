import React from "react";
import "../assets/css/Paginado/Paginado.scss";

export default function Pages({ pages, changePage, actualPage, next, prev }) {

  return (
    <div className="allPaginado">
      <div className="ContainerPaginado">
        <button
          key={"prev"}
          onClick={() => prev(actualPage)}
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
          onClick={() => next(actualPage, pages)}
          className="BotonPaginado"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}