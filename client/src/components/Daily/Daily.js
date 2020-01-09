import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { CashReceived } from "./cashReceived";
import receivedData from "./cashReceivedData";

const styles = theme => ({
  root: {
    alignItems: "center",
    borderRadius: 3,
    border: 0,
    padding: "1vh 1vw",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "35vw"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
});

const validationSchema = Yup.object({
  username: Yup.string("Enter a Username").required("Username is required"),
  password: Yup.string("").required("Enter your password")
});

class Daily extends Component {
  handleSubmit = data => {
    console.log(data);
  };

  render() {
    const { classes } = this.props;
    const values = receivedData;

    return (
      <Paper className={classes.root}>
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
          isInitialValid={false}
        >
          {props => <CashReceived {...props} />}
        </Formik>
      </Paper>
    );
  }
}

export default withStyles(styles)(Daily);
