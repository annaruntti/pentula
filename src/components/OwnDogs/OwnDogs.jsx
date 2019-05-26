import React from "react";
import Header from "../Header/Header";
import DogImage from "../../images/viivinaama.jpg";
import { Link } from "react-router-dom";
import "./OwnDogs.scss";

function OwnDogs() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <Link to={"/frontpage"}>
          <div className="text-box-red">
            <h3>
              Onko sinulla uusi koira, joita ei vielä löydy järjestelmästä?
              Lisää koirasi tiedot.
            </h3>
          </div>
        </Link>
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
      </div>
    </div>
  );
}

export default OwnDogs;
