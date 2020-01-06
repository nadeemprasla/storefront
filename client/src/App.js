import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import Login from "./components/Login";
import { Toolbar } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      auth: false
    };
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  render() {
    const {isAuthenticated, user} = this.props.auth;

    return (
        <Router>
          {!isAuthenticated ? (
            <Login />
          ) : (
              <Grid container direction="column">
                <Nav />
                <Toolbar />
                <Routes />
                <Footer />
              </Grid>
            )}
        </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);
