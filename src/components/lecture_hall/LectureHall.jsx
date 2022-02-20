import React from "react";
import Sidebar from "../menu/sidebar/Sidebar";
import LectureHallBox from "./lecture_hall-box/LectureHallBox";
import './lecture_hall.scss'
import vector10 from '../../assets/images/icons/Vector 10.svg'

function LectureHall() {

  return(

    <div className="lecturehall">
      <div className="container">
        <div className="lecturehall__wrapper">
          <Sidebar />
          <LectureHallBox />
          <div className="lecturehall__next">
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          <img src={vector10} alt="" />
          <span>гастрономия</span>
          </div>
        </div>
      </div>
    </div>

  );

};

export default LectureHall;