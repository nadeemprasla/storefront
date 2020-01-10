import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
} from "@material-ui/core";
import paidData from "./cashPaidData";

const useStyles = makeStyles({
    root: {
        zIndex: 0

    },
});




export const CashPaid = (props) => {
    const classes = useStyles();
    const { handleChange, state, NumberFormatCustom } = props
    return (
        <div>
            <h3>Cash Paid</h3>

            {paidData.map((item, index) => {
                return (
                    <TextField
                        className={classes.root}
                        key={item.name}
                        name={item.name}
                        id={item.name}
                        label={item.label}
                        value={state[item.name]}
                        onChange={handleChange}
                        fullWidth
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
