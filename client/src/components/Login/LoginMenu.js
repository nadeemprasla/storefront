import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Checkbox, Button, TextField, FormControlLabel} from "@material-ui/core";
import API from "../../utils/API";

const styles = theme => ({
  root: {
    borderRadius: 3,
    border: 0,
    padding: "1vh 1vw",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "35vw"
  },
  form: {
    // width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 3)
  }
});

class LoginMenu extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    API.loginUser(this.state).then((res)=>{
        console.log("you are logged in")
    })
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Paper>
    );
  }
}

LoginMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginMenu);
