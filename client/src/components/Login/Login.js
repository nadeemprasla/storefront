import React from "react";
import LoginMenu from "./LoginMenu"
import RegisterMenu from "./RegisterMenu"
import Header from "./Header"
import { Grid } from "@material-ui/core";
import "./login.css"
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";


export default function Nav() {
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
          <Route path="*"><Redirect to="/login" /></Route>

        </Switch>
      </Grid>
    </Router>
  );
}