import React, { Component } from "react";
import "./ItemAddForm.css";

class Imput extends Component {
  render() {
    return (
      <form className="add-form">
        <label>
          Name:
          <input
            className="label-form"
            type="text"
            name="name"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded("hihi")}
        />
      </form>
    );
  }
}

export default Imput;
