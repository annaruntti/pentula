import React from "react";
import Header from "../Header/Header";
import FormAddLitter from "../FormAddLitter/FormAddLitter";
import "./AddPuppies.scss";

function AddPuppies() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="text-box-white">
        <h1 className="h3">Pentu nro 1.</h1>
        <FormAddLitter />
      </div>
    </div>
  );
}

export default AddPuppies;
