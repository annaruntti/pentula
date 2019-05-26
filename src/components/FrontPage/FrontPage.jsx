import React from "react";
import Header from "../Header/Header";
import "./FrontPage.scss";

function FrontPage() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="text-box-white">
          <h3>Selaa ja muokkaa omien koiriesi tietoja.</h3>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
