import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";
import { CashReceived } from "./cashReceived";
import { CashPaid } from "./cashPaid";
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    alignItems: "center",
    borderRadius: 3,
    border: 0,
    padding: "1vh 1vw",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "80vw"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  form: {
    display: "flex",
  },
  submitHolder: {
    justifyContent: "flex-end",
    display: "flex"
  },
  submit: {
    width:"45%"
  }
});
function NumberFormatCustom(props) {
  const { inputRef, onChange, name, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange(name, values.floatValue);
      }}
      thousandSeparator
      isNumericString
      decimalScale={2}
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

class Daily extends Component {
  constructor() {
    super()
    this.state = {
      cashReceived: {
        openingCash: "",
        nonTax: "",
        tax: "",
        totalSales: "",
        salesTax: "",
        lotterySales: "",
        lottoSales: "",
        checkCash: "",
        cashDown: "",
        moneyOrder: "",
        badCheck: "",
        creditSaleCol: ""
      },
      cashPaid: {
        "closingCash": "",
        "foodStamps": "",
        "creditCard": "",
        "purchasing": "",
        "bankDeposit": "",
        "atm": "",
        "creditSale": "",
        "services": "",
        "expenseDetail": "",
        "lotLotteryCashes": ""
      }
    }
  }
  handleSubmit = event => {
    event.preventDefault();
  };

  handleReceived = (name, value) => {
    this.setState({
      cashReceived: {
        ...this.state.cashReceived,
        [name]: value
      }
    })
  }
  handlePaid = (name, value) => {
    this.setState({
      cashPaid: {
        ...this.state.cashPaid,
        [name]: value
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <h1>Daily Entry</h1>
        <form
          onSubmit={this.handleSubmit}>
          <div className={classes.form}>
            <CashReceived
              handleChange={this.handleReceived}
              state={this.state.cashReceived}
              NumberFormatCustom={NumberFormatCustom}
            />
            <CashPaid
              handleChange={this.handlePaid}
              state={this.state.cashPaid}
              NumberFormatCustom={NumberFormatCustom}
            />
          </div>
          <div className={classes.submitHolder}>
            <Button className={classes.submit} type="submit" variant="contained" color="primary">
              Submit
        </Button>
          </div>
        </form>

      </Paper>
    );
  }
}

export default withStyles(styles)(Daily);
