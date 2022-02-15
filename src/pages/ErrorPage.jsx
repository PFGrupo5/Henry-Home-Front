import React from "react";
import { Link } from 'react-router-dom'
import "../assets/css/ErrorPage/Error.scss";

function ErrorPage() {

  return (
    <div className="NotFoundContainer">v
      <div className="notfound">
        <div className="notfound-404">
          <h1 className="h1-error">
            4<span className="span-error">0</span>4
          </h1>
        </div>
        <Link to="/home"><button className="Btn-Home-error">home</button></Link>
      </div>
    </div>
  );
}

export default ErrorPage;
