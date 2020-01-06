const db = require("../models");
const bcrypt = require("bcryptjs");
require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET;
const textController = require("./textController");

module.exports = {
  create: async function (req, res) {
    let errors = {
      email: null,
      username: null
    };
    let { firstName, lastName, username, email, password } = await textController.format(req.body)
    await db.Users.findOne({ email }).then((userFound) => {
      if (userFound) return (errors.email = "Email already exists.");
    });
    await db.Users.findOne({ username }).then((userFound) => {
      if (userFound) return (errors.username = "Username already exists.");
    });
    if (errors.email || errors.username) {
      res.status(400).json(errors);
    }
    else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          let newUser = {
            firstName,
            lastName,
            username,
            email,
            password: hash
          };
          db.Users.create(newUser)
            .then((dbModel) => {
              const { firstName, lastName, username, register_date } = dbModel;
              const user = { firstName, lastName, username, register_date }
              jwt.sign(
                { id: dbModel._id },
                jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) console.log(err);
                  res.json(
                    {
                      token,
                      user
                    }
                  )
                }
              )
            })
            .catch((err) => res.status(422).json(err));
        });
      });
    }
  },
};
