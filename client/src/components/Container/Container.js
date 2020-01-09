import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Navbar from "../Nav";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Daily from "../Daily";
import Report from "../Report";
import DashboardComp from "../Dashboard";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar
          open={open}
          setOpen={setOpen}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/dashboard" component={DashboardComp} />
            <Route exact path="/daily" component={Daily} />
            <Route exact path="/report" component={Report} />
            <Route path="*"><Redirect to="/dashboard"/></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
