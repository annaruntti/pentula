import React from "react";
import "./App.css";
import LoginView from "./components/LoginView/LoginView";
import FrontPage from "./components/FrontPage/FrontPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="main-app">
        <Router>
          <Route exact path="/" component={LoginView} />
          <Route path="/frontpage" component={FrontPage} />
        </Router>
      </div>
    </div>
  );
}

export default App;
