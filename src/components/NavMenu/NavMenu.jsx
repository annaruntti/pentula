import React from "react";
import "./NavMenu.scss";

function NavMenu() {
  return (
    <nav>
      <ul className="nav-link-list">
        <li className="list-item">Omat koirat</li>
        <li className="list-item">Kasvattajalle</li>
        <li className="list-item">Pennun omistajalle</li>
      </ul>
    </nav>
  );
}

export default NavMenu;
