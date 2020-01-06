import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { clearErrors } from '../../actions/errorActions';

const styles = theme => ({
  root: {
    borderRadius: 3,
    border: 0,
    padding: "1vh 1vw",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "35vw"
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 3)
  }
});

// const validEmailRegex = RegExp(
//   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// );

class RegisterMenu extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      password: null,
      errors: {
        email: "",
        username: "",
        password: ""
      }
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({
          errors: { ...prevProps.errors, email: error.msg.email, username: error.msg.username }
        });
      }
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    // let error = "";
    // if (name === "confirm-password") {
    //   this.state.password === value
    //     ? (error = "same password")
    //     : (error = "error");
    // }
    // if (name === "email") {
    // }

    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.register(newUser);
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
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

const newRegisterMenu = withStyles(styles)(RegisterMenu);

export default connect(mapStateToProps, { register, clearErrors })(newRegisterMenu);
