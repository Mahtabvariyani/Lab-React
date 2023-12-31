import React from "react";
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";

function Cards({icon,alt,title,description}){
  return (
    <div className="card">
      <img src={icon} alt={alt} />
      <h4 className="card-title"> {title} </h4>
      <p> {description} </p>
    </div>
  );
}

https://codesandbox.io/s/react-lab-say-hello-to-reactjs-hzwhkh?file=/src/App.js

export default Cards;
