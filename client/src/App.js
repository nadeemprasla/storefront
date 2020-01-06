import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Container from "./components/Container";
import PropTypes from "prop-types";

class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <Router>
        {!isAuthenticated ? (
          <Login />
        ) : (
          <Container />
        )}
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);
