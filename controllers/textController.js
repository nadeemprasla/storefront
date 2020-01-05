module.exports = {
    format: function (req) {
        let { firstName, lastName, username, email, password } = req;
        firstName = firstName.toLowerCase().replace(/^./, firstName[0].toUpperCase());
        lastName = lastName.toLowerCase().replace(/^./, lastName[0].toUpperCase());
        username = username.toLowerCase();
        email = email.toLowerCase();
        req = {
            firstName,
            lastName,
            username,
            email,
            password
        }
        return req
    }
}