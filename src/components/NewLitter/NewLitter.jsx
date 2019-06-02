import React from "react";
import Header from "../Header/Header";
import FormAddDog from "../FormAddDog/FormAddDog";
// import { Link } from "react-router-dom";
import "./NewLitter.scss";

function NewLitter() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="text-box-white">
        <h3>Lisää pentueesi tiedot</h3>
        <FormAddDog />
      </div>
    </div>
  );
}

export default NewLitter;
