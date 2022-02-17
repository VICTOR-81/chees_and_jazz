import React from 'react';

import './sidebar.scss';
import menudarkicon from '../../../assets/images/icons/menu-dark-icon.svg';
import insta from '../../../assets/images/icons/insta.svg';
import vk from '../../../assets/images/icons/vk.svg';
import youtube from '../../../assets/images/icons/youtube.svg';

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebar__title">
          Фестиваль шахмат и джаза 2022
      </div>
      <div className="sidebar__menu-icon">
        <img src={menudarkicon} alt="" />
      </div>
      <div className="sidebar__social">
        <a><img src={insta} alt="" /></a>
        <a><img src={vk} alt="" /></a>
        <a><img src={youtube} alt="" /></a>
      </div>
    </div>
  );
  
}

export default Sidebar;