import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    margin: "2vh",
    padding: '1vh 3vh',
  },
  button: {
    padding: theme.spacing(2, 10),
    backgroundColor: '#007bff',
    '&:hover': {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    borderRadius: 7,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .5)',
    color:"white"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Link to="/register" style={{ textDecoration: 'none' }}><Button variant="contained" className={classes.button}>Register</Button></Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/login" style={{ textDecoration: 'none' }}><Button variant="contained" className={classes.button}>Login</Button></Link>
        </Grid>
      </Grid>
    </div>
  );
}
