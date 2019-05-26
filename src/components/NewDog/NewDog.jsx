import React from "react";
import Header from "../Header/Header";
import FormAddDog from "../FormAddDog/FormAddDog";
// import { Link } from "react-router-dom";
import "./NewDog.scss";

function NewDog() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="text-box-white">
          <h3>Lisää koirasi tiedot</h3>
          <FormAddDog />
        </div>
      </div>
    </div>
  );
}

export default NewDog;
