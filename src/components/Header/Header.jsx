import React from "react";
import NavIcon from "../NavIcon/NavIcon";
import NavMenu from "../NavMenu/NavMenu";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="flex-wrapper">
        <div className="flex-item-left">
          <NavIcon />
        </div>
        <div className="flex-item-right">
          <div className="MenuArea">
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
