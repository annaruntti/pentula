import React from "react";
import AppIcon from "../AppIcon/AppIcon";
import TextBox from "../TextBox/TextBox";
import LoginGmailButton from "../LoginGmailButton/LoginGmailButton";
import "./LoginView.scss";

function LoginView() {
  return (
    <div className="LoginView">
      <div className="container">
        <div className="flex-wrapper">
          <div className="FlexItem">
            <AppIcon />
          </div>
          <div className="FlexItem">
            <h1 className="header-title">Pentula</h1>
          </div>
        </div>
        <div className="LoginArea">
          <TextBox />
          <div className="ButtonArea">
            <LoginGmailButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
