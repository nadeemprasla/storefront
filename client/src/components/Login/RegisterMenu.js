import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { clearErrors } from '../../actions/errorActions';
import { RegisterForm } from './RegisterForm'
import { Formik } from "formik";
import * as Yup from "yup";

const styles = theme => ({
  root: {
    borderRadius: 3,
    border: 0,
    padding: "1vh 1vw",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "35vw"
  }
});

const validationSchema = Yup.object({
  firstName: Yup.string("Enter a First Name").required("First Name is required"),
  username: Yup.string("Enter a Username").required("Username is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class RegisterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  handleSubmit = data => {
    this.props.register(data);
  };

  render() {
    const { classes } = this.props;
    const values = { firstName: "", lastName: "", email: "", username: "", password: "", confirmPassword: "" };

    return (
      <Paper className={classes.root}>
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
          isInitialValid={false}
        >{props => <RegisterForm {...props} />}</Formik>
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
