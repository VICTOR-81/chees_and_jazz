import React from "react";
import MobileMenuCommunication from "./mobile_menu-communication/MobileMenuCommunication";
import MobileMenuHeader from "./mobile_menu-header/MobileMenuHeader";
import MobileMenulist from "./mobile_menu-list/MobileMenuList";
import './mobille_menu.scss'

function MobileMenu() {

  return (

    <div className="mobilemenu">
      <div className="mobile__container">
        <MobileMenuHeader />
        <MobileMenulist />
        <MobileMenuCommunication />
      </div>
    </div>

  );

};

export default MobileMenu;