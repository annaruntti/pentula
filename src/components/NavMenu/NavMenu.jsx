import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import "./NavMenu.scss";

function NavMenu() {
  return (
    <nav>
      <ul className="nav-link-list">
        <li className="list-item">
          <Link to={"/etusivu"}>
            <div className="nav-flex-wrapper">
              <span className="nav-flex-item-left">Etusivu</span>
              <span className="nav-flex-item-right">
                <IconButton aria-label="Etusivulle">
                  <Icon>arrow_forward_ios</Icon>
                  <Typography variant="srOnly">Etusivulle</Typography>
                </IconButton>
              </span>
            </div>
          </Link>
        </li>
        <li className="list-item">
          <Link to={"/omat-koirat"}>
            <div className="nav-flex-wrapper">
              <span className="nav-flex-item-left">Omat koirat</span>
              <span className="nav-flex-item-right">
                <IconButton aria-label="Etusivulle">
                  <Icon>arrow_forward_ios</Icon>
                  <Typography variant="srOnly">Omat koirat</Typography>
                </IconButton>
              </span>
            </div>
          </Link>
        </li>
        <li className="list-item">
          <Link to={"/kasvattajalle"}>
            <div className="nav-flex-wrapper">
              <span className="nav-flex-item-left">Kasvattajalle</span>
              <span className="nav-flex-item-right">
                <IconButton aria-label="Etusivulle">
                  <Icon>arrow_forward_ios</Icon>
                  <Typography variant="srOnly">Kasvattajalle</Typography>
                </IconButton>
              </span>
            </div>
          </Link>
        </li>
        <li className="list-item">
          <Link to={"/etusivu"}>
            <div className="nav-flex-wrapper">
              <span className="nav-flex-item-left">Pennunottajalle</span>
              <span className="nav-flex-item-right">
                <IconButton aria-label="Etusivulle">
                  <Icon>arrow_forward_ios</Icon>
                  <Typography variant="srOnly">Pennunottajalle</Typography>
                </IconButton>
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
