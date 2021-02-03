import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar main">
        <div className="one">
          <h1 className="dochead">
            <a href="https://www.interns.pk/">Interns Pakistan</a>
          </h1>
        </div>
        <div className="two">
          <p className="menuitem">Home</p>
          <p className="menuitem">Dashboard</p>
          <p className="menuitem">Challenges</p>
          <p className="menuitem">Queries</p>
          <p className="logout">Logout</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
