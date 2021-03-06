import React from "react";
import Header from "../Header/Header";
import FormAddLitter from "../FormAddLitter/FormAddLitter";
// import { Link } from "react-router-dom";
import "./NewLitter.scss";

function NewLitter() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="text-box-white">
        <h1 className="h3">Lisää pentueesi tiedot</h1>
        <FormAddLitter />
      </div>
    </div>
  );
}

export default NewLitter;
