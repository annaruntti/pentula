import React from "react";
import DogIcon from "../../images/dog-logo-sircle.png";
import "./AppIcon.scss";

function AppIcon() {
  return (
    <div className="ImageArea">
      <img className="AppIcon" src={DogIcon} alt="" />
    </div>
  );
}

export default AppIcon;
