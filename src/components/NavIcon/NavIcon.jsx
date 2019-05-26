import React from "react";
import DogIcon from "../../images/dog-logo-sircle.png";
import { Link } from "react-router-dom";
import "./NavIcon.scss";

function NavIcon() {
  return (
    <Link to={"/etusivu"}>
      <div className="ImageArea">
        <img className="AppIcon" src={DogIcon} alt="" />
      </div>
    </Link>
  );
}

export default NavIcon;
