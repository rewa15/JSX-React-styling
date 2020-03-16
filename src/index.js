import React from "react";
import ReactDOM from "react-dom";

const image = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      My Gallery
    </h1>
    <div>
      <img className="food-img" src={image} alt="Randomimage" />
    </div>
  </div>,
  document.getElementById("root")
);
