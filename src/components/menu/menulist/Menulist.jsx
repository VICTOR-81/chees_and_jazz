import React from "react";
import './menulist.scss';
import menuarrow from '../../../assets/images/icons/menu-arrow.svg'

function Menulist() {

  return(
<div className="menulist">
  <ul>
    <li><span>01 /</span><a href="">Джаз</a><span><img src={menuarrow} alt="" /></span></li>
    <li><span>02 /</span><a href="">Шахматы</a><span><img src={menuarrow} alt="" /></span></li>
    <li><span>03 /</span><a href="">Лекторий</a><span><img src={menuarrow} alt="" /></span></li>
    <li><span>04 /</span><a href="">Гастрономия</a><span><img src={menuarrow} alt="" /></span></li>
    <li><span>05 /</span><a href="">Архив событий</a><span><img src={menuarrow} alt="" /></span></li>
    <li><span>06 /</span><a href="">Партнеры</a><span><img src={menuarrow} alt="" /></span></li>
  </ul>
</div>
  );
};

export default Menulist;