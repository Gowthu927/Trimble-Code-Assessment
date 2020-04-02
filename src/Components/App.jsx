import React, { Component } from "react";
import Header from "./Header/Header";
import Breadcrumb from "./Breadcrumb/BreadCrumb";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import UserInput from "./UserInput";
import MainDisplay from "./MainDisplay";

import { Route, Switch } from "react-router-dom";
import SideBar from "./SideBars/SideBar";

class App extends Component {
  state = {
    mainDisplay: true
  };
  render() {
    return (
      <div>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Header />
            <Grid item xs={12}>
              <Card
                style={{
                  color: "#FFFFFF",
                  height: "40px",
                  margin: "10px",
                  paddingTop: "20px"
                }}
              >
                <Breadcrumb />
              </Card>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={3}>
                <SideBar />
              </Grid>
              <Grid item xs={9}>
                {/* <Route path="./create-user" component={UserInput} /> */}
                {/* <UserInput />
                <MainDisplay /> */}
                {/* {this.state.mainDisplay ? <MainDisplay /> : <UserInput />} */}
                <Switch>
                  <Route path="/" exact strict component={MainDisplay} />
                  <Route
                    path="/create-user"
                    exact
                    strict
                    component={UserInput}
                  />
                </Switch>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;
