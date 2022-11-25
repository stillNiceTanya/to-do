import React, { Component } from "react";
import "./ItemAddForm.css";

class Imput extends Component {
  state = {
    label: "",
  };
  onLabelChange = (event) => {
    this.setState({ label: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
  };
  render() {
    return (
      <form
        className="add-form"
        onSubmit={this.onSubmit}
      >
        <label>
          {this.state.label}
          <input
            className="label-form"
            onChange={this.onLabelChange}
            type="text"
            name="name"
            placeholder="some task"
          />
        </label>
        <button
          // type="submit"
          value="Submit"
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded}
        >
          Add item
        </button>
      </form>
    );
  }
}

export default Imput;
