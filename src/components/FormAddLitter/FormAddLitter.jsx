import React from "react";
import BDatePicker from "../BDatePicker/BDatePicker";
// import { Link } from "react-router-dom";

import "./FormAddLitter.scss";

class FormAddLitter extends React.Component {
  constructor() {
    super();
    this.state = {
      own_litters: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const that = this;
    fetch("http://localhost:8000/api/omat-pentueet").then(function (response) {
      response.json().then(function (data) {
        that.setState({
          own_litters: data,
        });
      });
    });
  }

  addLitter(event) {
    const that = this;
    event.preventDefault();
    const post_data = {
      bdate: this.refs.bdate.value,
      litter_name: this.refs.litter_name.value,
      breed: this.refs.breed.value,
      mom_name: this.refs.mom_name.value,
      dad_name: this.refs.dad_name.value,
      additional_info: this.refs.additional_info.value,
      litter_id: Math.floor(Math.random() * 1000) + 4,
      user_id: Math.floor(Math.random() * 1000) + 4,
    };
    const request = new Request("http://localhost:8000/api/uusi-pentue", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(post_data),
    });

    const own_litters = that.state.own_litters;
    own_litters.push(post_data);
    console.log(own_litters);
    that.setState({
      own_litters: own_litters,
    });

    // xmlhttprequest()
    fetch(request)
      .then(function (response) {
        response.json().then(function (data) {});
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  handleSubmit(event) {
    alert("Uusi pentue lisätty: " + this.state.litter_name);
    event.preventDefault();
    this.props.history.push("/pentujen-tiedot");
  }

  render() {
    // const own_litters = this.state.own_litters;
    return (
      <form ref="postForm" onSubmit={this.onFormSubmit}>
        <div className="input-area">
          <label>Pentueen syntymäpäivä</label>
          <BDatePicker id="bdate" name="bdate" type="text" ref="bdate" />
          <label>Pentueen nimi</label>
          <input
            id="litter_name"
            name="litter_name"
            ref="litter_name"
            type="text"
            placeholder="Esim. A-pentue"
          />
          <label>Pentueen rotu</label>
          <input
            id="breed"
            name="breed"
            ref="breed"
            type="text"
            placeholder="Esim. suomenlapinkoira"
          />
          <label>Emon virallinen nimi</label>
          <input id="mom_name" name="mom_name" type="text" ref="mom_name" />
          <label>Isän virallinen nimi</label>
          <input id="dad_name" name="dad_name" type="text" ref="dad_name" />
          <label>Muistiinpanot synnytyksen kulusta</label>
          <textarea
            rows="5"
            cols="60"
            id="additional_info"
            name="additional_info"
            type="text"
            ref="additional_info"
            placeholder="Esim. synnytyksen alkamis- ja loppumiskellonaika yms."
          />
        </div>
        <div className="btn-continue-area">
          <button
            className="submit-btn"
            onClick={this.addLitter.bind(this)}
            type="submit"
            value="Submit"
          >
            Jatka pentujen lisäämiseen
          </button>
        </div>
      </form>
    );
  }
}

export default FormAddLitter;
