import React from "react";
import '../assets/css/ErrorPage/Error.css'

function ErrorPage() {
  return (
    <div className="Container-Error">
        <h1 className="Title">Page Not Found</h1>
        <h2 className="Error">404</h2>
        <h3 className="Redireccion">Redireccionando al Home</h3>
    </div>
  );
}

export default ErrorPage;
