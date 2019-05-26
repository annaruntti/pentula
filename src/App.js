import React from "react";
import "./App.css";
import LoginView from "./components/LoginView/LoginView";
import FrontPage from "./components/FrontPage/FrontPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OwnDogs from "./components/OwnDogs/OwnDogs";

function App() {
  return (
    <div className="App">
      <div className="main-app">
        <Router>
          <Route exact path="/" component={LoginView} />
          <Route path="/etusivu" component={FrontPage} />
          <Route path="/omat-koirat" component={OwnDogs} />
        </Router>
      </div>
    </div>
  );
}

export default App;
