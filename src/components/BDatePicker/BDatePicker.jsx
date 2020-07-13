import React from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./BDatePicker.scss";

import fi from "date-fns/locale/fi";
registerLocale("fi", fi);

class BDatePicker extends React.Component {
  state = {
    birthDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      birthDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        locale="fi"
        selected={this.state.birthDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default BDatePicker;
