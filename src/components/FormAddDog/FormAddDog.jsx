import React from "react";
// import { Link } from "react-router-dom";
import "./FormAddDog.scss";

class FormAddDog extends React.Component {
  constructor() {
    super();
    this.state = {
      omat_koirat: [],
    };

    // this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Make AJAX calls here

  componentDidMount() {
    var that = this;
    fetch("http://localhost:8000/api/omat-koirat").then(function (response) {
      response.json().then(function (data) {
        that.setState({
          omat_koirat: data,
        });
      });
    });
  }

  addDog(event) {
    var that = this;
    event.preventDefault();
    let post_data = {
      virallinen_nimi: this.refs.virallinen_nimi.value,
      kutsumanimi: this.refs.kutsumanimi.value,
      syntymaaika: this.refs.syntymaaika.value,
      sukupuoli: this.refs.sukupuoli.value,
      // accept: this.refs.accept.value,
      user_id: Math.floor(Math.random() * 1000) + 4,
    };
    var request = new Request("http://localhost:8000/api/uusi-koira", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(post_data),
    });

    let omat_koirat = that.state.omat_koirat;
    omat_koirat.push(post_data);
    console.log(omat_koirat);
    that.setState({
      omat_koirat: omat_koirat,
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
    alert("Uusi koira lisätty: " + this.state.kutsumanimi);
    event.preventDefault();
  }

  render() {
    // let omat_koirat = this.state.omat_koirat;
    return (
      <form ref="postForm" onSubmit={this.onFormSubmit}>
        <div className="input-area">
          <label>Koirasi kutsumanimi:</label>
          <input
            id="kutsumanimi"
            name="kutsumanimi"
            ref="kutsumanimi"
            type="text"
          />
          <label>Koirasi virallinen nimi:</label>
          <input
            id="virallinen_nimi"
            name="virallinen_nimi"
            type="text"
            ref="virallinen_nimi"
          />
          <label>Koirasi syntymäaika:</label>
          <input
            id="syntymaaika"
            name="syntymaaika"
            type="text"
            ref="syntymaaika"
          />
          <label>Koirasi sukupuoli:</label>
          <select id="sukupuoli" name="sukupuoli" ref="sukupuoli">
            <option value="">Valitse sukupuoli</option>
            <option value="uros">Uros</option>
            <option value="narttu">Narttu</option>
          </select>
        </div>
        <div className="btn-area">
          <button
            className="submit-btn"
            onClick={this.addDog.bind(this)}
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

export default FormAddDog;
