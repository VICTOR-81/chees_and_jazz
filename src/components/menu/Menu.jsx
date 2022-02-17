import React from 'react';
import Copyright from './copyright/Copyright';
import './menu.scss';
import Menulist from './menulist/Menulist';
import Sidebar from './sidebar/Sidebar';

function Menu() {
	return(
		<div className="menu">
			<div className="container">
				<div className="menu__wrapper">
					<Sidebar />
					<Menulist />
					<Copyright />
				</div>
			</div>
		</div>
	);
}

export default Menu;
