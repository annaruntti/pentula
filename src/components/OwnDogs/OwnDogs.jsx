import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import Header from "../Header/Header";
import OwnDogBox from "../OwnDogBox/OwnDogBox";
import "./OwnDogs.scss";

function OwnDogs() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <Link to={"/uusi-koira"}>
        <div className="text-box-blue">
          <div className="box-flex-wrapper">
            <div className="flex-item-left">
              <h3>
                Onko sinulla uusi koira, joita ei vielä löydy järjestelmästä?
                Lisää koirasi tiedot.
              </h3>
            </div>
            <div className="flex-item-right">
              <IconButton aria-label="Lisää">
                <Icon className="white-icon">add_circle</Icon>
                <Typography variant="srOnly">Lisää koira</Typography>
              </IconButton>
            </div>
          </div>
        </div>
      </Link>
      <OwnDogBox />
    </div>
  );
}

export default OwnDogs;
