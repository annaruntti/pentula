import React from "react";
import { Link } from "react-router-dom";
import DogImage from "../../images/viivinaama.jpg";
import "./OwnDogBox.scss";

class OwnDogBox extends React.Component {
  constructor() {
    super();
    this.state = {
      own_dogs: [],
    };
  }

  // Make AJAX calls here

  componentDidMount() {
    var that = this;
    fetch("http://localhost:8000/api/omat-koirat").then(function (response) {
      response.json().then(function (data) {
        that.setState({
          own_dogs: data,
        });
      });
    });
  }
  render() {
    let own_dogs = this.state.own_dogs;
    return (
      <div className="text-box-white">
        <h3>Omat koirasi:</h3>
        <ul className="dog-list">
          {own_dogs.map((new_dog) => (
            <li>
              <Link to={"/etusivu"}>
                <div className="li-flex-wrapper">
                  <div className="flex-item-left">
                    <img className="list-image" src={DogImage} alt="" />
                  </div>
                  <div className="flex-item-right">
                    <span>
                      <b>"{new_dog.name}"</b>
                    </span>
                    <br />
                    <span>{new_dog.official_name}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
          {/* <li>
            <Link to={"/frontpage"}>
              <div className="li-flex-wrapper">
                <div className="flex-item-left">
                  <img className="list-image" src={DogImage} alt="" />
                </div>
                <div className="flex-item-right">
                  <span>
                    <b>"Uma"</b>
                  </span>
                  <br />
                  <span>Hallakedon Lumimarja</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/frontpage"}>
              <div className="li-flex-wrapper">
                <div className="flex-item-left">
                  <img className="list-image" src={DogImage} alt="" />
                </div>
                <div className="flex-item-right">
                  <span>
                    <b>"Minni"</b>
                  </span>
                  <br />
                  <span>Hallakedon Ulpukka</span>
                </div>
              </div>
            </Link>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default OwnDogBox;
