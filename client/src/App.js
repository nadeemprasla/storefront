import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Login from "./components/Login";
import Container from "./components/Container";
import PropTypes from "prop-types";

class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
        <Fragment>

        {!isAuthenticated ? (
          <Login />
        ) : (
          <Container />
        )}
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);
