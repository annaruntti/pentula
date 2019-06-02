import React from "react";
import { Link } from "react-router-dom";
import DogImage from "../../images/viivinaama.jpg";
import "./OwnDogBox.scss";

class OwnDogBox extends React.Component {
  constructor() {
    super();
    this.state = {
      // nimi: "",
      omat_koirat: []
    };
  }

  // Make AJAX calls here

  componentDidMount() {
    var that = this;
    fetch("http://localhost:8000/api/omat-koirat").then(function(response) {
      response.json().then(function(data) {
        that.setState({
          omat_koirat: data
        });
      });
    });
  }
  render() {
    let omat_koirat = this.state.omat_koirat;
    return (
      <div className="text-box-white">
        <h3>Omat koirasi:</h3>
        <ul className="dog-list">
          {omat_koirat.map(uusi_koira => (
            <li>
              <Link to={"/etusivu"}>
                <div className="li-flex-wrapper">
                  <div className="flex-item-left">
                    <img className="list-image" src={DogImage} alt="" />
                  </div>
                  <div className="flex-item-right">
                    <span>
                      <b>"{uusi_koira.kutsumanimi}"</b>
                    </span>
                    <br />
                    <span>{uusi_koira.virallinen_nimi}</span>
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
