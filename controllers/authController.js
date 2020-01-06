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
    await db.Users.findOne({ username }).then(userFound => {
      if (!userFound) return res.status(400).json("User does not exist.");
      bcrypt.compare(password, userFound.password).then(isMatch => {
        if (!isMatch)
          return res.status(400).json({ msg: "Invalid credentials" });
        jwt.sign(
          { id: userFound._id },
          jwtSecret,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) console.log(err);
            console.log(token);
            res.json({
              token,
              username
            });
          }
        );
      });
    });
  },
  verifyUser: function() {
      db.Users.findById(req.user.id)
        .select('-password')
        .then((userFound)=> res.json(userFound));

  }
};
