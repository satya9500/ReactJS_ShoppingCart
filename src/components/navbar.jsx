import React, { Component } from "react";

class NavBar extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  render() {
    const { totalCounters } = this.props;
    return (
      <nav className="navbar navbar-light bg-light" style={this.styles}>
        <a className="navbar-brand" href="#">
          Navbar&nbsp;
          <span className="badge badge-secondary" style={this.styles}>
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
