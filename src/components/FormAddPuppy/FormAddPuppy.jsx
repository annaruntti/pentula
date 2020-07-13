import React from "react";
import BDatePicker from "../BDatePicker/BDatePicker";

class FormAddPuppy extends React.Component {
  constructor() {
    super();
    this.state = {
      puppies: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const that = this;
    fetch("http://localhost:8000/api/omat-pentueet/pennut").then(function (
      response
    ) {
      response.json().then(function (data) {
        that.setState({
          puppies: data,
        });
      });
    });
  }

  addLitter(event) {
    const that = this;
    event.preventDefault();
    const post_data = {
      puppy_id: Math.floor(Math.random() * 1000) + 4,
      btime: this.refs.btime.value,
      name: this.refs.name.value,
      bweight: this.refs.bweight.value,
      sex: this.refs.sex.value,
      description: this.refs.description.value,
      litter_id: Math.floor(Math.random() * 1000) + 4,
    };

    const request = new Request(
      "http://localhost:8000/api/uusi-pentue/pennun-tiedot",
      {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(post_data),
      }
    );

    const puppies = that.state.puppies;
    puppies.push(post_data);
    console.log(puppies);
    that.setState({
      puppies: puppies,
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
    alert("Pentueen pennut talennettu!");
    event.preventDefault();
  }

  render() {
    // const puppies = this.state.puppies;
    return (
      <form ref="postForm" onSubmit={this.onFormSubmit}>
        <div className="input-area">
          <label>Syntymäaika</label>
          <BDatePicker id="btime" name="btime" type="text" ref="btime" />
          <label>Pennun nimi</label>
          <input
            id="name"
            name="name"
            ref="name"
            type="text"
            placeholder="Pennun ns. työnimi"
          />
          <label>Pennun syntymäpaino</label>
          <input
            id="bweight"
            name="bweight"
            ref="bweight"
            type="text"
            placeholder="Paino grammoina"
          />
          <label>Pennun tuntomerkit</label>
          <textarea
            rows="5"
            cols="60"
            id="description"
            name="description"
            type="text"
            ref="description"
            placeholder="Esim. väri, merkit yms."
          />
          <label>Pennun sukupuoli</label>
          <select id="sex" name="sex" ref="sex">
            <option value="">Valitse sukupuoli</option>
            <option value="uros">Uros</option>
            <option value="narttu">Narttu</option>
          </select>
        </div>
        <div className="btn-continue-area">
          <button
            className="submit-btn"
            onClick={this.addLitter.bind(this)}
            type="submit"
            value="Submit"
          >
            Tallenna
          </button>
        </div>
      </form>
    );
  }
}

export default FormAddPuppy;
