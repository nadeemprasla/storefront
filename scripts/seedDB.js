const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
dbname = "storefront";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + dbname);

const userSeed = [
  {
    firstName: "Nadeem",
    lastName: "Prasla",
    username: "nprasla",
    date: new Date(Date.now())
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });