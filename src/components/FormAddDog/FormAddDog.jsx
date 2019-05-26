import React from "react";
// import { Link } from "react-router-dom";
import "./FormAddDog.scss";

class FormAddDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      officialname: "",
      bdate: "",
      sex: [],
      heat: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOfficialNameChange = this.handleOfficialNameChange.bind(this);
    this.handleBdateChange = this.handleBdateChange.bind(this);
    this.handleSexChange = this.handleSexChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleOfficialNameChange(event) {
    this.setState({ officialname: event.target.value });
  }

  handleBdateChange(event) {
    this.setState({ bdate: event.target.value });
  }

  handleSexChange(event) {
    this.setState({
      sex: event.target.value
    });
  }

  handleHeatChange(event) {
    this.setState({
      heat: event.target.value
    });
  }

  handleSubmit(event) {
    alert("Uusi koira lisätty: " + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-area">
          <label>
            Koirasi kutsumanimi:
            <input
              id="name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Koirasi virallinen nimi:
            <input
              id="officialname"
              name="officialname"
              type="text"
              value={this.state.officialname}
              onChange={this.handleOfficialNameChange}
            />
          </label>
          <label>
            Koirasi syntymäaika:
            <input
              id="bdate"
              name="bdate"
              type="text"
              value={this.state.bdate}
              onChange={this.handleBdateChange}
            />
          </label>
          <label>
            <span className="select-label">Koirasi sukupuoli:</span>
            <select value={this.state.sex} onChange={this.handleSexChange}>
              <option value="">Valitse sukupuoli</option>
              <option value="uros">Uros</option>
              <option value="narttu">Narttu</option>
            </select>
          </label>
        </div>
        <div className="btn-area">
          <button className="submit-btn" type="submit" value="Submit">
            Lähetä
          </button>
        </div>
      </form>
    );
  }
}

// function FormAddDog() {
//   return (
//     <form className="form-add-new">
//       <label>
//         Koirasi kutsumanimi:
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Koirasi virallinen nimi:
//         <input type="text" name="official-name" />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

export default FormAddDog;
