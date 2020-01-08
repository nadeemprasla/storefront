import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const LoginForm = props => {
    let {
        values: { username, password },
        errors,
        handleSubmit,
        handleChange,
        isValid,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="username"
                helperText={Boolean(errors.username) ? errors.username : ""}
                error={Boolean(errors.username)}
                label="Username"
                value={username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField
                name="password"
                helperText={Boolean(errors.password) ? errors.password : ""}
                error={Boolean(errors.password)}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                value={password}
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid}
            >
                Submit
			</Button>
        </form>
    );
};
