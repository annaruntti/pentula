import React from "react";
import { Link } from "react-router-dom";
import DogImage from "../../images/viivinaama.jpg";
import "./OwnDogBox.scss";

function OwnDogBox() {
  return (
    <div className="text-box-white">
      <h3>Omat koirasi:</h3>
      <ul className="dog-list">
        <li>
          <Link to={"/frontpage"}>
            <div className="li-flex-wrapper">
              <div className="flex-item-left">
                <img className="list-image" src={DogImage} alt="" />
              </div>
              <div className="flex-item-right">
                <span>
                  <b>"Viivi"</b>
                </span>
                <br />
                <span>Kultalangan Wenus</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/frontpage"}>
            <div className="li-flex-wrapper">
              <div className="flex-item-left">
                <img className="list-image" src={DogImage} alt="" />
              </div>
              <div className="flex-item-right">
                <span>
                  <b>"Uma"</b>
                </span>
                <br />
                <span>Hallakedon Lumimarja</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/frontpage"}>
            <div className="li-flex-wrapper">
              <div className="flex-item-left">
                <img className="list-image" src={DogImage} alt="" />
              </div>
              <div className="flex-item-right">
                <span>
                  <b>"Minni"</b>
                </span>
                <br />
                <span>Hallakedon Ulpukka</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default OwnDogBox;
