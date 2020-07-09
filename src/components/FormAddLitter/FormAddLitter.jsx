import React from "react";
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
      mom_name: this.refs.mom_name.value,
      dad_name: this.refs.dad_name.value,
      additional_info: this.refs.additional_info.value,
      num_of_puppies: this.refs.num_of_puppies,
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
  }

  render() {
    // const own_litters = this.state.own_litters;
    return (
      <form ref="postForm" onSubmit={this.onFormSubmit}>
        <div className="input-area">
          <label>Pentueen syntymäpäivä:</label>
          <input
            id="bdate"
            name="bdate"
            type="text"
            ref="bdate"
            placeholder="Esim. 05.07.2019"
          />
          <label>Pentueen nimi:</label>
          <input
            id="litter_name"
            name="litter_name"
            ref="litter_name"
            type="text"
            placeholder="Esim. A-pentue"
          />
          <label>Emon virallinen nimi:</label>
          <input id="emon_nimi" name="emon_nimi" type="text" ref="emon_nimi" />
          <label>Isän virallinen nimi:</label>
          <input id="isan_nimi" name="isan_nimi" type="text" ref="isan_nimi" />
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
          <div className="flex-wrapper">
            <label className="form-item-left">
              Pentujen
              <br />
              lukumäärä:
            </label>
            <div className="form-item-right">
              <input
                type="text"
                id="num_of_puppies"
                name="num_of_puppies"
                ref="num_of_puppies"
              />
            </div>
            <span className="text-span-label">kpl</span>
          </div>
        </div>
        <div className="btn-area">
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
