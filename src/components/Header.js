import React from "react";
import "../styles/Header.css"

function Header(){
  const usuario = "Ana";

  return(
    <div className="header">
      <h3>Bem vinda(o) {usuario}!</h3>
    </div>
  );
}

export default Header;