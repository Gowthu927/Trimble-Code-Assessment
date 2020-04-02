import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainDisplay extends Component {
  render() {
    return (
      <div>
        <h2>Welcome Guest</h2>
        <h3>Click the below link to register</h3>
        <Link to="/create-user">Register Here</Link>
      </div>
    );
  }
}
export default MainDisplay;
