import React from "react";
import './gastronomy-box.scss'
import Btnbayticket from "../../menu/btnbayticket/Btnbayticket";

function GastronomyBox() {

  return(

    <div className="gastronomybox">
      <div className="gastronomybox__title-wrapper">
        <div className="gastronomybox__title-inner">
          <div className="gastronomybox__title">
            Гастрономия Гастрономия&nbsp;
          </div>
        </div>
        <div className="">
          <Btnbayticket />
        </div>
      </div>
    </div>

  );

};

export default GastronomyBox;