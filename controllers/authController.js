const db = require("../models");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWTSECRET;
const textController = require("./textController");
const auth = require("../middleware/auth");

module.exports = {
  login: async function(req, res) {
    let { username, password } = await textController.formatUsername(req.body);
    db.Users.findOne({ username }).then(userFound => {
      if (!userFound)
        return res.status(400).json({ msg: "Invalid credentials" });
      bcrypt.compare(password, userFound.password).then(isMatch => {
        if (!isMatch)
          return res.status(400).json({ msg: "Invalid credentials" });
        let { firstName, lastName, register_date } = userFound;
        user = {
          id: userFound._id,
          username,
          firstName,
          lastName,
          register_date
        };
        jwt.sign(
          { id: userFound._id },
          jwtSecret,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) console.log(err);
            res.json({
              token,
              user
            });
          }
        );
      });
    });
  },
  verifyUser: function(req, res) {
    auth(req.body, res, (user, response) => {
      db.Users.findById(user.id)
        .select("-password")
        .then(userFound => {
          const {
            _id,
            firstName,
            lastName,
            username,
            email,
            register_date
          } = userFound;
          let data = {  id: _id,
            firstName,
            lastName,
            username,
            email,
            register_date
          };
          response.json(data);
        });
    });
  }
};
