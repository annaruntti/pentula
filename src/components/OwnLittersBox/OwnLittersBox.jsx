import React from "react";
import { Link } from "react-router-dom";
import DogImage from "../../images/viivinaama.jpg";
import "./OwnLittersBox.scss";

function OwnLittersBox() {
  return (
    <div className="text-box-white">
      <h3>Omat pentueesi:</h3>
      <ul className="dog-list">
        <li>
          <Link to={"/frontpage"}>
            <div className="li-flex-wrapper">
              <div className="flex-item-left">
                <img className="list-image" src={DogImage} alt="" />
              </div>
              <div className="flex-item-right">
                <span>
                  <b>L-pentue</b>
                </span>
                <br />
                <span>Syntymäaika 31.7.2014</span>
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
                  <b>U-pentue</b>
                </span>
                <br />
                <span>Syntymäaika 21.7.2016</span>
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
                  <b>P-pentue</b>
                </span>
                <br />
                <span>Syntymäaika 21.2.2018</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default OwnLittersBox;
