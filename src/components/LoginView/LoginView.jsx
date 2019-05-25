import React from "react";
import AppIcon from "../AppIcon/AppIcon";
import TextBox from "../TextBox/TextBox";
import LoginGmailButton from "../LoginGmailButton/LoginGmailButton";
import "./LoginView.scss";

function LoginView() {
  return (
    <div className="LoginView">
      <AppIcon />
      <div className="LoginArea">
        <TextBox />
        <div className="ButtonArea">
          <LoginGmailButton />
        </div>
      </div>
    </div>
  );
}

export default LoginView;
