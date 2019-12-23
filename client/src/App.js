import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }


  render() {
    return (
      <Router>
        <Fragment>


          <Nav />
          <Switch>
            {/* <Route exact path="/" component={} /> */}
            <Route component={NoMatch} />
          </Switch>

          
        </Fragment>
      </Router>
    );

  }
}
export default App;
