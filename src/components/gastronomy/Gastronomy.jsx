import React from "react";
import Sidebar from "../menu/sidebar/Sidebar";
import GastronomyBox from "./gastronomy-box/GastronomyBox";
import './gastronomy.scss';


function Gastronomy() {

  return (

    <div className="gastronomy">
      <div className="container">
        <div className="gastronomy__wrapper">
          <Sidebar />
          <GastronomyBox />
        </div>
      </div>
    </div>

  );

};

export default Gastronomy;