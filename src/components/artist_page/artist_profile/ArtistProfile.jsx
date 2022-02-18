import React from "react";
import './artist_profile.scss'
import photoJR from '../../../assets/images/photos/photo-Jordan-Rakei.png'


function ArtistProfile() {

  return (

    <div className="artistprofile">
      <div className="artistprofile__card">
        <div className="artistprofile__date-wrapper">
          <span className="artistprofile__date">
            30 июля 2022
          </span>
          <span className="artistprofile__time">
            18:30 — 20:15
          </span>
        </div>
        <div className="artistprofile__name">
          Jordan Rakei
        </div>
        <div className="artistprofile__description">
          Новозеландско-австралийский певец, автор песен, продюссер,  совершенно точно Jordan Rakei уникальный
          и особенный музыкант. 30 июля 2022 на Chess & Jazz Вас ждет один из самых долгожданных лайвов.
        </div>
        <div className=""></div>
      </div>
      <div className="artistprofile__img">
        <img src={photoJR} alt="" />
      </div>
    </div>

  );

};

export default ArtistProfile;