import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/TitleContainer/TitleContainer.css"

const TitleContainer = () => {
  const history = useHistory();
  return (
    <div className="title-container">
      <h2 className="textHome">A un click de una travesía!</h2>
      <button
        onClick={() => {
          history.push("/home");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default TitleContainer;
