import React from "react";
import Header from "../Header/Header";
import OwnLittersBox from "../OwnLittersBox/OwnLittersBox";
import { Link } from "react-router-dom";
import "./Breeder.scss";

function Breeder() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <Link to={"/frontpage"}>
          <div className="text-box-red">
            <h3>
              Onko sinulla uusi pentue, jota ei vielä löydy järjestelmästä?
              Lisää pentueen tiedot.
            </h3>
          </div>
        </Link>
        <OwnLittersBox />
        <Link to={"/frontpage"}>
          <div className="text-box-red">
            <h3>
              Onko sinulla uusi jalostusnarttu, jota ei vielä löydy
              järjestelmästä? Lisää narttusi tiedot juoksuista, astutuksista ja
              synnytyksistä.
            </h3>
          </div>
        </Link>
        <Link to={"/omat-koirat"}>
          <div className="text-box-white">
            <h3>Jalostusnartut</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Breeder;
