import React from "react";
import { Grid } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import NoMatch from "../../pages/NoMatch";

export default function Nav() {

  return (
    <Grid>
        <Switch>
          {/* <Route exact path="/" component={} /> */}
          <Route component={NoMatch} />
        </Switch>
    </Grid>
  );
}
