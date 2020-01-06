import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Logout from "./Logout"
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Store Front
          </Typography>
            <Logout />
        </Toolbar>
      </AppBar>
    </div>
  );
}
