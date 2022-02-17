import React from "react";
import './copyright.scss'
import Btnbayticket from "../btnbayticket/Btnbayticket";

function Copyright() {

  return (
    <div className="copyright">
      <Btnbayticket />
      <div className="copyright__wrapper">
        <span>© 2022. Все права защищены</span>
        <a href="mailto:info@chessandjazz.com">info@chessandjazz.com</a>
      </div>
    </div>
  );

}

export default Copyright