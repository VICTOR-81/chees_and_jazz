import React from "react";
import './artist_page.scss';
import Sidebar from "../menu/sidebar/Sidebar";
import ArtistProfile from "./artist_profile/ArtistProfile";
import RightSidebar from "./right_sidebar/RightSidebar";

function ArtistPage() {

  return (

    <div className="artistpage">
      <div className="container">
        <div className="artistpage__wrapper">
          <Sidebar />
          <ArtistProfile />
          <RightSidebar />
        </div>
      </div>
    </div>

  );

};

export default ArtistPage;