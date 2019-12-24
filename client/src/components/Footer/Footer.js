import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    top: "auto",
    bottom: 0
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 10
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.footer}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" align="center" className={classes.title}>
            Footer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
