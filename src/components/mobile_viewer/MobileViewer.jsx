import React from "react";
import MobileHeader from "../mobile_artist_page/mobile_header/MobileHeader";
import './mobile_viewer.scss'
import closebtn from '../../assets/images/icons/artist-page-close.svg'
import MobileViewerSlider from "./mobile_viewer_slider/MobileViewerSlider";

function MobileViewer() {

  return (

    <div className="mobileviewer">
      <MobileHeader />
      <MobileViewerSlider />
      <div className="mobileviewer__title">
        Chess & Jazz Brunch 2021
      </div>
      <div className="mobileviewer__btn">
        <img src={closebtn} alt="" />
      </div>
    </div>

  );

};

export default MobileViewer;