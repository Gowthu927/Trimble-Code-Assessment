import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { AddDataAction } from "../Actions/AddDataAction";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";

class UserInput extends React.Component {
  state = {
    input: {},
    modelState: false
  };
  onSubmitForm = e => {
    e.preventDefault();
    let input = {};
    for (let data in this.refs) {
      input[data] = this.refs[data].value;
    }
    this.setState({ input }, () => {
      this.props.AddDataAction(this.state.input);
    });
    this.setState({ modelState: true });
  };
  handleClose = () => {
    this.setState({ modelState: false });
  };
  render() {
    return (
      <div>
        <form>
          <Grid container xs={16} spacing={2}>
            <Grid item xs={12}>
              <label>User Name</label>
              <input type="text" ref="UserName" />
            </Grid>
            <Grid item xs={12}>
              <label>Password</label>
              <input type="text" ref="PassWord" />
            </Grid>
            <Grid item xs={12}>
              <label>Confirm Password</label>
              <input type="text" ref="ConfirmPassword" />
            </Grid>
            <Grid item xs={12}>
              <label>Preferred Name</label>
              <input type="text" ref="PreferredName" />
            </Grid>
            <Grid item xs={12}>
              <label>DOB</label>
              <input type="text" ref="DOB" />
            </Grid>
            <Grid item xs={12}>
              <button onClick={this.onSubmitForm}>Submit</button>
            </Grid>
          </Grid>
        </form>

        <div>
          <Modal
            open={this.state.modelState}
            onClose={this.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div>
              <Card
                style={{
                  marginTop: "100px",
                  marginLeft: "300px",
                  height: "200px",
                  width: "300px",
                  float: "center",
                  backgroundColor: "#f3f3f3"
                }}
              >
                <Grid
                  style={{
                    height: "100px",
                    width: "150px",
                    float: "center",
                    backgroundColor: "#f3f3f3"
                  }}
                >
                  Welcome {this.state.input.UserName}
                  <div
                    style={{
                      float: "right",
                      height: "50px",
                      width: "50px",
                      marginTop: "40px"
                    }}
                  >
                    <button onClick={this.handleClose}>close</button>
                  </div>
                </Grid>
              </Card>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(null, { AddDataAction })(UserInput);
