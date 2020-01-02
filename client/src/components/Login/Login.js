import React, { Component } from "react";
import LoginMenu from "./LoginMenu"
import RegisterMenu from "./RegisterMenu"
import Header from "./Header"
import { Grid } from "@material-ui/core";
import "./login.css"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {

    return (
      <Router >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center" 
          style={{ backgroundColor: 'rgba(0, 0, 0,.9)' }}>
          <Header />
          <Switch>
            <Route path="/login" component={LoginMenu} />
            <Route path="/register" component={RegisterMenu} />
            <Route path="*" component={LoginMenu} />

          </Switch>
        </Grid>
      </Router>
    );
  }
}
