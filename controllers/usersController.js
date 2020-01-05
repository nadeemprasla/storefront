const db = require("../models");
const bcrypt = require("bcryptjs");
require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET;
const textController = require("./textController");

module.exports = {
  findAll: function (req, res) {
    db.Users.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //   findById: function(req, res) {
  //     db.Users
  //       .findById(req.params.id)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },



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
              const { firstName, lastName, username, email } = dbModel;
              jwt.sign(
                { id: dbModel._id },
                jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) console.log(err);
                  res.json(
                    {
                      token,
                      firstName,
                      lastName,
                      username,
                      email
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



  //   update: function(req, res) {
  //     db.Users
  //       .findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   remove: function(req, res) {
  //     db.Users
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
