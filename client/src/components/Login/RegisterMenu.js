import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { Paper, Button, TextField } from "@material-ui/core";
import API from "../../utils/API"


const styles = theme => ({
  root: {
    borderRadius: 3,
    border: 0,
    padding: '1vh 1vw',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: "35vw"

  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
});

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class RegisterMenu extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      username:null,
      email: null,
      password: null,
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
      }
    }
  }


  handleChange = (event) => {
    const { name, value } = event.target
    let error = ""

    console.log(name + " " + value)
    if (name === "confirm-password") {
      this.state.password === value ? error = "same password" : error = "error";
    }
    if (name === "email") {
    }

    this.setState({
      [name]: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
    }).then((res)=>{
      console.log(res.data)
    })

  }

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
              id="firstName"
              label="First Name"
              name="firstName"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.handleChange}
            />
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              onChange={this.handleChange}
            />
            <Button
              // type="submit"
              onClick={this.handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
          </Button>
          </form>
        </div>
      </Paper>
    );
  }
}

RegisterMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterMenu);

