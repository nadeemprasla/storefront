import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { clearErrors } from '../../actions/errorActions';
import { LoginForm } from './LoginForm'
import { Formik } from "formik";
import * as Yup from "yup";


const styles = theme => ({
  root: {
    borderRadius: 3,
    border: 0,
    padding: "1vh 1vw",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "35vw"
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

const validationSchema = Yup.object({
  username: Yup.string("Enter a Username").required("Username is required"),
  password: Yup.string("")
    .required("Enter your password"),
});



class LoginMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      error: ""
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ open: true })
        this.setState({
          error: error.msg.msg
        });
      }
    }
  }

  handleSubmit = data => {
    this.props.login(data);
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;
    const values = { username: "", password: "" };
    return (
      <Paper className={classes.root}>
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
          isInitialValid={false}
        >{props => <LoginForm {...props} />}</Formik>


        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>{this.state.error}</DialogTitle>
          <DialogContent>Please try again or Contact Admin for password reset.</DialogContent>
        </Dialog>
      </Paper>

    );
  }
}

LoginMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

const newLoginMenu = withStyles(styles)(LoginMenu);
export default connect(mapStateToProps, { login, clearErrors })(newLoginMenu);

