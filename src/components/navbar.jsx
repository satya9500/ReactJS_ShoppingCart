import React, { Component } from "react";

class NavBar extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light" style={this.styles}>
        <a className="navbar-brand" href="#">
          Navbar&nbsp;
          <span className="badge badge-secondary" style={this.styles}>
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
