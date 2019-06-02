import React from "react";
// import { Link } from "react-router-dom";
import "./FormAddDog.scss";

class FormAddDog extends React.Component {
  constructor() {
    super();
    this.state = {
      // nimi: "",
      omat_koirat: []
    };

    // this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  addDog(event) {
    var that = this;
    event.preventDefault();
    let post_data = {
      virallinen_nimi: this.refs.virallinen_nimi.value,
      kutsumanimi: this.refs.kutsumanimi.value,
      syntymaaika: this.refs.syntymaaika.value,
      sukupuoli: this.refs.sukupuoli.value,
      // accept: this.refs.accept.value,
      user_id: Math.floor(Math.random() * 1000) + 4
    };
    var request = new Request("http://localhost:8000/api/uusi-koira", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(post_data)
    });

    let omat_koirat = that.state.omat_koirat;
    omat_koirat.push(post_data);
    console.log(omat_koirat);
    that.setState({
      omat_koirat: omat_koirat
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

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     nimi: "",
  //     virallinen_nimi: "",
  //     syntymaaika: "",
  //     sukupuoli: [],
  //     juoksu: ""
  //   };

  //   this.handleNameChange = this.handleNameChange.bind(this);
  //   this.handleOfficialNameChange = this.handleOfficialNameChange.bind(this);
  //   this.handleBdateChange = this.handleBdateChange.bind(this);
  //   this.handleSexChange = this.handleSexChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleNameChange(event) {
  //   this.setState({ nimi: event.target.value });
  // }

  // handleOfficialNameChange(event) {
  //   this.setState({ virallinen_nimi: event.target.value });
  // }

  // handleBdateChange(event) {
  //   this.setState({ syntymaaika: event.target.value });
  // }

  // handleSexChange(event) {
  //   this.setState({
  //     sukupuoli: event.target.value
  //   });
  // }

  // handleHeatChange(event) {
  //   this.setState({
  //     juoksu: event.target.value
  //   });
  // }

  handleSubmit(event) {
    alert("Uusi koira lisätty: " + this.state.kutsumanimi);
    event.preventDefault();
  }

  render() {
    let omat_koirat = this.state.omat_koirat;
    return (
      // <form onSubmit={this.handleSubmit}>
      <form ref="postForm" onSubmit={this.onFormSubmit}>
        <div className="input-area">
          <label>
            Koirasi kutsumanimi:
            <input
              id="kutsumanimi"
              name="kutsumanimi"
              ref="kutsumanimi"
              type="text"
              // value={this.state.nimi}
              // onChange={this.handleNameChange}
            />
          </label>
          <label>
            Koirasi virallinen nimi:
            <input
              id="virallinen_nimi"
              name="virallinen_nimi"
              type="text"
              ref="virallinen_nimi"
              // value={this.state.virallinen_nimi}
              // onChange={this.handleOfficialNameChange}
            />
          </label>
          <label>
            Koirasi syntymäaika:
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
            <span className="select-label">Koirasi sukupuoli:</span>
            <select
              id="sukupuoli"
              name="sukupuoli"
              ref="sukupuoli"
              // value={this.state.sukupuoli}
              // onChange={this.handleSexChange}
            >
              <option value="">Valitse sukupuoli</option>
              <option value="uros">Uros</option>
              <option value="narttu">Narttu</option>
            </select>
          </label>
        </div>
        <div className="btn-area">
          {/* <button className="submit-btn" type="submit" value="Submit"> */}
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
