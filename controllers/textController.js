module.exports = {
  format: function(req) {
    let { firstName, lastName = null, username, email, password } = req;
    firstName = firstName
      .toLowerCase()
      .replace(/^./, firstName[0].toUpperCase());
    if(lastName) lastName = lastName.toLowerCase().replace(/^./, lastName[0].toUpperCase());
    username = username.toLowerCase();
    email = email.toLowerCase();
    return (req = {
      firstName,
      lastName,
      username,
      email,
      password
    });
  },
  formatUsername: function(req) {
    let { username, password } = req;
    username = username.toLowerCase();
    return (req = { username, password });
  }
};
