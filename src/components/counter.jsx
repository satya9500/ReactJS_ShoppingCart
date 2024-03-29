import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
          style={this.styles}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={this.styles}
        >
          Delete
        </button>
        <br />
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
