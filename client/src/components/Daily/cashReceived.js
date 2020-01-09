import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
} from "@material-ui/core";
import receivedData from "./cashReceivedData";

const useStyles = makeStyles({
  root: {
   width:"80%"
  },
});


export const CashReceived = (props) => {
  const classes = useStyles();
  const { handleChange, state, NumberFormatCustom } = props
  return (
    <div>
      <h3>Cash Received</h3>

      {receivedData.map((item, index) => {
        return (
          <TextField
            className={classes.root}
            key={item.name}
            name={item.name}
            id={item.name}
            label={item.label}
            value={state[item.name]}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            InputProps={{
              inputComponent: NumberFormatCustom
            }}
          />
        )
      })}

    </div>
  );
};
