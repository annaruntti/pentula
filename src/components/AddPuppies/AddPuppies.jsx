import React from "react";
import Header from "../Header/Header";
import FormAddPuppy from "../FormAddPuppy/FormAddPuppy";
import "./AddPuppies.scss";

function AddPuppies() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <FormAddPuppy />
    </div>
  );
}

export default AddPuppies;
