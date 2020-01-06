import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import Login from "./components/Login";
import { Toolbar } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import {loadUser} from './actions/authActions'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      auth: false
    };
  }

  componentDidMount() {
      store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          {!this.state.auth ? (
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
      </Provider>
    );
  }
}
export default App;
