import React from "react";
import AppIcon from "../AppIcon/AppIcon";
import NavMenu from "../NavMenu/NavMenu";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex-wrapper">
          <div className="FlexItem">
            <AppIcon />
          </div>
          <div className="FlexItem">
            <div className="MenuArea">
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
