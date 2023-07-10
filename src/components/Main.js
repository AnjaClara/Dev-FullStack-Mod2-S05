import React from "react";
import icon from "../images/icon.png";
import Button from "./Button";
import Input from "./Input";

function Main(){

  return(
    <div className="main">
      <img className="icon" src={icon} alt="Cientist Icon"/>
      <Input propPT="Envie uma mensagem" propEN="Send a message"/>
      <div className="main-btn">
        <Button prop="Enviar" propUS="Send" propNumber={1} propBoolean/>
      </div>
    </div>
  );
}

export default Main;