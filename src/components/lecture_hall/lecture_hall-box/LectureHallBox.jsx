import React from "react";
import Btnbayticket from "../../menu/btnbayticket/Btnbayticket";
import Speaker from "../speaker/speaker";
import './lecture_hall-box.scss'
import speaker1 from '../../../assets/images/artist_avatars/speaker_ava-1.png'
import speaker2 from '../../../assets/images/artist_avatars/speaker_ava-2.png'
import speaker3 from '../../../assets/images/artist_avatars/speaker_ava-3.png'
import speaker4 from '../../../assets/images/artist_avatars/speaker_ava-4.png'
import speaker5 from '../../../assets/images/artist_avatars/speaker_ava-5.png'

function LectureHallBox() {

  return (

    <div className="lecturehallbox">
      <div className="lecturehallbox__title-wrapper">
        <div className="lecturehallbox__title-inner">
          <div className="lecturehallbox__title">
            лекторий лекторий&nbsp;
          </div>
        </div>
        <div className="">
          <Btnbayticket />
        </div>
      </div>
      <div className="lecturehallbox__schedule">
        <div className="lecturehallbox__schedule-date">30 июля 2022</div>
        <div className="lecturehallbox__schedule-speakers">
          <Speaker ava={speaker5} date="19:30 – 20:00"
            name="Круглый стол с Денисом Бояриновым (RUSH MUSIC), Ником Бабиным (CHESS & JAZZ), Кристианом Беришай (JMSN) и Евгением Лебедевым (LRK TRIO)." />
        </div>
      </div>
      <div className="lecturehallbox__schedule">
        <div className="lecturehallbox__schedule-date">31 июля 2022</div>
        <div className="lecturehallbox__schedule-speakers">
          <Speaker ava={speaker1} date="15:15 – 15:40"
            name="Михаил Борзенков, фронтмен группы ELEKTROMONTEUR" />
          <Speaker ava={speaker2} date="16:30 – 17:00"
            name="Гаяна Бойцова, 
            автор-исполнитель «GAYANA»" />
          <Speaker ava={speaker3} date="18:00 – 18:30"
            name="Илья Куснирович, директор
            по маркетингу Bosco di Ciliegi" />
          <Speaker ava={speaker4} date="18:00 – 18:30"
            name="Александр Морозевич, гроссмейстер" />
        </div>
      </div>
    </div>

  );

};

export default LectureHallBox;