import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
          style={this.styles}
        >
          Reset
        </button>
        <br />
        <br />
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
