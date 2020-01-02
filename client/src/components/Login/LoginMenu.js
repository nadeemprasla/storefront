import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Checkbox, Button, TextField, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 3,
    border: 0,
    padding: '1vh 1vw',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: "35vw"
  },
  form: {
    // width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
}));

export default function LoginMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>

      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

        </form>
      </div>

    </Paper>
  );
}
