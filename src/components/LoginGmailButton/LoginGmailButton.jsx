import React from "react";
import { Link } from "react-router-dom";
import "./LoginGmailButton.scss";
// import ReactDOM from "react-dom";
// import GoogleLogin from "react-google-login";

// function LoginGmailButton() {
//     const responseGoogle = response => {
//       console.log(response);
//     };

//   ReactDOM.render(
//     <GoogleLogin
//       clientId="440525636119-8frn6pmqs99qk79d2lvu11vev1btfdf0.apps.googleusercontent.com"
//       render={renderProps => (
//         <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
//           This is my custom Google button
//         </button>
//       )}
//       buttonText="Login"
//       //   onSuccess={responseGoogle}
//       //   onFailure={responseGoogle}
//       cookiePolicy={"single_host_origin"}
//     />,
//     document.getElementById("googleButton")
//   );
// }

// const GOOGLE_BUTTON_ID = "google-sign-in-button";

class LoginGmailButton extends React.Component {
  //   componentDidMount() {
  //     window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
  //       width: 200,
  //       height: 50,
  //       onsuccess: this.onSuccess
  //     });
  //   }
  //   onSuccess(googleUser) {
  //     const profile = googleUser.getBasicProfile();
  //     console.log("Name: " + profile.getName());
  //   }
  render() {
    return (
      // <div id={GOOGLE_BUTTON_ID} />
      //   <button to={"/frontpage"} className="GmailButton">
      //     Gmail-kirjautuminen
      //   </button>
      <Link to={"/etusivu"} className="GmailButton">
        Gmail-kirjautuminen
      </Link>
    );
  }
}

export default LoginGmailButton;
