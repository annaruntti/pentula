import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./FrontPage.scss";

function FrontPage() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <Link to={"/omat-koirat"}>
          <div className="text-box-white">
            <h3>Selaa ja muokkaa omien koiriesi tietoja.</h3>
          </div>
        </Link>
        <Link to={"/frontpage"}>
          <div className="text-box-red">
            <h3>
              Oletko kasvattaja? Lisää pentuetietoja ja selaa pentueidesi
              tietoja.
            </h3>
          </div>
        </Link>
        <Link to={"/frontpage"}>
          <div className="text-box-white">
            <h3>
              SOletko pennun omistaja? Lisää merkintöjä pennustasi ja selaa
              tietoja.
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
