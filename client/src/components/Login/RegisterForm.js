import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


export const RegisterForm = props => {
    const {
        values: { firstName, lastName, email, username, password, confirmPassword },
        errors,
        handleSubmit,
        handleChange,
        isValid,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="firstName"
                helperText={Boolean(errors.firstName) ? errors.firstName : ""}
                error={Boolean(errors.firstName)}
                label="First Name"
                value={firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField
                name="lastName"
                helperText={Boolean(errors.lastName) ? errors.lastName : ""}
                error={Boolean(errors.lastName)}
                label="Last Name"
                value={lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField
                name="email"
                helperText={Boolean(errors.email) ? errors.email : ""}
                error={Boolean(errors.email)}
                label="Email Address"
                fullWidth
                margin="normal"
                variant="outlined"
                value={email}
                onChange={handleChange}
            />
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
            <TextField
                name="confirmPassword"
                helperText={Boolean(errors.confirmPassword) ? errors.confirmPassword : ""}
                error={Boolean(errors.confirmPassword)}
                label="Confirm Password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                value={confirmPassword}
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
