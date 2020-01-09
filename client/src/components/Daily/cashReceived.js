import React, { Fragment } from "react";
import {
  Button,
  TextField,
  InputLabel,
  InputAdornment
} from "@material-ui/core";

export const CashReceived = props => {
  let {
    values: {
      openingCash,
      nonTax,
    ...initialValues
    },
    errors,
    handleSubmit,
    stateChange,
    isValid
  } = props;
console.log(stateChange)
  return (
    <Fragment>
      <h1>Daily Entry</h1>
      <form onSubmit={handleSubmit}>
        <h3>Cash Received</h3>

        <InputLabel htmlFor="openingCash">Opening Cash</InputLabel>
        <TextField
          name="openingCash"
          id="openingCash"
          helperText={Boolean(errors.openingCash) ? errors.openingCash : ""}
          error={Boolean(errors.openingCash)}
          label="Opening Cash"
          value={openingCash}
          onChange={stateChange}
          type="number"
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
        <InputLabel htmlFor="nonTax">Non-Tax</InputLabel>
        <TextField
          name="nonTax"
          id="nonTax"
          helperText={Boolean(errors.nonTax) ? errors.nonTax : ""}
          error={Boolean(errors.nonTax)}
          label="$"
          value={nonTax}
          onChange={stateChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Fragment>
  );
};
