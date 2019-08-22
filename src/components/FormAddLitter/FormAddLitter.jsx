import React from "react";
// import { Link } from "react-router-dom";
import "./FormAddLitter.scss";

class FormAddLitter extends React.Component {
  constructor() {
    super();
    this.state = {
      // nimi: "",
      omat_pentueet: []
    };

    // this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Make AJAX calls here

  componentDidMount() {
    const that = this;
    fetch("http://localhost:8000/api/omat-pentueet").then(function(response) {
      response.json().then(function(data) {
        that.setState({
          omat_pentueet: data
        });
      });
    });
  }

  addLitter(event) {
    const that = this;
    event.preventDefault();
    const post_data = {
      syntymaaika: this.refs.syntymaaika.value,
      pentueen_nimi: this.refs.pentueen_nimi.value,
      emon_nimi: this.refs.emon_nimi.value,
      isan_nimi: this.refs.isan_nimi.value,
      lisatiedot: this.refs.lisatiedot.value,
      litter_id: Math.floor(Math.random() * 1000) + 4
    };
    const request = new Request("http://localhost:8000/api/uusi-pentue", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(post_data)
    });

    const omat_pentueet = that.state.omat_pentueet;
    omat_pentueet.push(post_data);
    console.log(omat_pentueet);
    that.setState({
      omat_pentueet: omat_pentueet
    });

    // xmlhttprequest()
    fetch(request)
      .then(function(response) {
        response.json().then(function(data) {});
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  handleSubmit(event) {
    alert("Uusi pentue lisätty: " + this.state.pentueen_nimi);
    event.preventDefault();
  }

  render() {
    const omat_pentueet = this.state.omat_pentueet;
    return (
      // <form onSubmit={this.handleSubmit}>
      <form ref="postForm" onSubmit={this.onFormSubmit}>
        <div className="input-area">
          <label>
            Pentueen syntymäaika:
            <input
              id="syntymaaika"
              name="syntymaaika"
              type="text"
              ref="syntymaaika"
              // value={this.state.syntymaaika}
              // onChange={this.handleBdateChange}
            />
          </label>
          <label>
            Pentueen nimi:
            <input
              id="pentueen_nimi"
              name="pentueen_nimi"
              ref="pentueen_nimi"
              type="text"
              placeholder="Esim. A-pentue"
              // value={this.state.nimi}
              // onChange={this.handleNameChange}
            />
          </label>
          <label>
            Emon virallinen nimi:
            <input
              id="emon_nimi"
              name="emon_nimi"
              type="text"
              ref="emon_nimi"
              // value={this.state.virallinen_nimi}
              // onChange={this.handleOfficialNameChange}
            />
          </label>
          <label>
            Isän virallinen nimi:
            <input
              id="isan_nimi"
              name="isan_nimi"
              type="text"
              ref="isan_nimi"
              // value={this.state.virallinen_nimi}
              // onChange={this.handleOfficialNameChange}
            />
          </label>
          <label>
            Muistiinpanot synnytyksen kulusta
            <textarea
              rows="5"
              cols="60"
              id="lisatiedot"
              name="lisatiedot"
              type="text"
              ref="lisatiedot"
              placeholder="Esim. synnytyksen alkamis- ja loppumiskellonaika yms."
              // value={this.state.virallinen_nimi}
              // onChange={this.handleOfficialNameChange}
            />
          </label>
          <div className="flex-wrapper">
            <label className="form-item-left">
              Pentujen
              <br /> lukumäärä:
            </label>
            <div className="form-item-right">
              <input type="text" id="pentu_lkm" />
            </div>
            <span className="text-span-label">kpl</span>
          </div>
        </div>
        <div className="btn-area">
          {/* <button className="submit-btn" type="submit" value="Submit"> */}
          <button
            className="submit-btn"
            onClick={this.addLitter.bind(this)}
            type="submit"
            value="Submit"
          >
            Lähetä
          </button>
        </div>
      </form>
    );
  }
}

export default FormAddLitter;
