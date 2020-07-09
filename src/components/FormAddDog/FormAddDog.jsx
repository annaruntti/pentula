import React from "react";
import "./FormAddDog.scss";

class FormAddDog extends React.Component {
  constructor() {
    super();
    this.state = {
      own_dogs: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  addDog(event) {
    var that = this;
    event.preventDefault();
    let post_data = {
      official_name: this.refs.official_name.value,
      name: this.refs.name.value,
      bdate: this.refs.bdate.value,
      sex: this.refs.sex.value,
      dog_id: Math.floor(Math.random() * 1000) + 4,
      user_id: Math.floor(Math.random() * 1000) + 4,
    };
    var request = new Request("http://localhost:8000/api/uusi-koira", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(post_data),
    });

    let own_dogs = that.state.own_dogs;
    own_dogs.push(post_data);
    console.log(own_dogs);
    that.setState({
      own_dogs: own_dogs,
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
    alert("Uusi koira lisätty: " + this.state.name);
    event.preventDefault();
  }

  render() {
    // let own_dogs = this.state.own_dogs;
    return (
      <form ref="postForm" onSubmit={this.onFormSubmit}>
        <div className="input-area">
          <label>Koirasi kutsumanimi:</label>
          <input id="name" name="name" ref="name" type="text" />
          <label>Koirasi virallinen nimi:</label>
          <input
            id="official_name"
            name="official_name"
            type="text"
            ref="official_name"
          />
          <label>Koirasi syntymäpäivä:</label>
          <input
            id="bdate"
            name="bdate"
            type="text"
            ref="bdate"
            placeholder="Esim. 05.07.2019"
          />
          <label>Koirasi sukupuoli:</label>
          <select id="sex" name="sex" ref="sex">
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
