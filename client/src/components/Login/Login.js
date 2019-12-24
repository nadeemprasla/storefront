import React, { Component } from "react";
import LoginMenu from "./LoginMenu"
import { Grid } from "@material-ui/core";

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
        <Grid 
        container 
        spacing={0}
        direction="column"
        align="center" 
        justify="center" >
        <LoginMenu />
        </Grid>
    );
  }
}
