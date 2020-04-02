import React, { Component } from "react";
import { connect } from "react-redux";

class SideBar extends Component {
  render() {
    const data = ["User 1", "User 2", "User 3"];
    return (
      <div>
        <h3>Registerd Users</h3>
        {
          <ul>
            {this.props.data.map(data => (
              <li>{data.UserName}</li>
            ))}
          </ul>
        }
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    data: store.userData
  };
};
export default connect(mapStateToProps)(SideBar);
