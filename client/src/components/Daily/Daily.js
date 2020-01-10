import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";
import { CashReceived } from "./cashReceived";
import { CashPaid } from "./cashPaid";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import { connect } from "react-redux";
import { loadItem, sendItem } from "../../actions/itemActions";

var moment = require("moment");

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
    display: "flex"
  },
  submitHolder: {
    justifyContent: "flex-end",
    display: "flex"
  },
  submit: {
    width: "45%"
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
  onChange: PropTypes.func.isRequired
};

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false,
      firstLoad: false,
      item: {
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
        creditSaleCol: "",
        closingCash: "",
        foodStamps: "",
        creditCard: "",
        purchasing: "",
        bankDeposit: "",
        atm: "",
        creditSale: "",
        services: "",
        expenseDetail: "",
        lotLotteryCashes: ""
      }
    };
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    loadItem: PropTypes.func.isRequired,
    sendItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  };

  componentDidMount() {
    let date = moment(this.state.date._d).format("MMM DD YYYY");
    let user = this.props.user;
    let data = {
      date: date,
      user: user
    };
    this.props.loadItem(data);
  }
  componentDidUpdate(prevProp) {
    // console.log(prevProp.item.item);
    // console.log(this.props.item.item)
    if (this.state.firstLoad === false) {
      if (prevProp.item.item !== this.props.item.item) {
        console.log("item are updated       ", this.props.item.item);
        this.setState({ firstLoad: true, item: this.props.item.item });
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    let user = this.props.user;
    let date = moment(this.state.date._d).format("MMM DD YYYY");
    let data = {
      date: date,
      item: this.state.item,
      user: user
    };
    console.log(data);
    this.props.sendItem(data);
  };

  handleChange = (name, value = 0) => {
    this.setState({
      item: {
        ...this.state.item,
        [name]: value
      }
    });
  };

  handleDateChange = date => {
    this.setState(prevState => {
      let prevDate = moment(prevState.date._d).format("MMM DD YYYY");
      let newDate = moment(date._d).format("MMM DD YYYY");
      if (prevDate !== newDate) {
        let user = this.props.user;
        let data = {
          date: newDate,
          user: user
        };
        this.props.loadItem(data);
      }
      return { date: date };
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <h1>Daily Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <SingleDatePicker
            readOnly
            displayFormat="MMM DD YYYY"
            date={this.state.date}
            onDateChange={date => this.handleDateChange(date)}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            id="date"
            isOutsideRange={() => false}
          />
          <div className={classes.form}>
            <CashReceived
              handleChange={this.handleChange}
              state={this.state.item}
              NumberFormatCustom={NumberFormatCustom}
            />
            <CashPaid
              handleChange={this.handleChange}
              state={this.state.item}
              NumberFormatCustom={NumberFormatCustom}
            />
          </div>
          <div className={classes.submitHolder}>
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  item: state.item
});

const newDaily = withStyles(styles)(Daily);
export default connect(mapStateToProps, { loadItem, sendItem })(newDaily);
