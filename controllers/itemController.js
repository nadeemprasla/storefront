const db = require("../models");

module.exports = {
  getItem: async function(req, res) {
    let id = req.body.user.id;
    let date = req.body.date;
    console.log(id);
    db.Users.findOne({ _id: id })
      .populate("item")
      .then(userFound => {
        let result = userFound.item.filter(e => {
          let itemDate = e.date.toString().slice(4, 15);
          if (itemDate === date) return e;
        });
        res.json(result[0]);
      });
  },
  postItem: function(req, res) {
    console.log("PostItem Req Body      ", req.body);
    let id = req.body.user.id;
    let date = req.body.date;
    let data = { ...req.body.item, date };
    db.Users.findOne({ _id: id })
      .populate("item")
      .then(userFound => {
        console.log("Userfound       ", userFound);
        console.log("userfound length    ", userFound.item.length);
        if (userFound.item.length >= 1) {
          let result = userFound.item.filter(e => {
            let itemDate = e.date.toString().slice(4, 15);
            if (itemDate === date) return e;
          });
          console.log("result     ", result);
          db.Item.findOneAndUpdate(
            { _id: result[0].id },
            { ...req.body.item },
            { new: true }
          ).then(updatedItem => {
            console.log("updatedItem   once filtered   ", updatedItem);
          });
        } else {
            console.log("req body      ",req.body.item)
            db.Item.create(data)
            .then(addedItem => {
              return db.Users.findOneAndUpdate(
                { _id: id },
                { item: addedItem._id },
                { new: true }
              );
            })
            .then(updatedUser => {
              console.log("created Item       ", updatedUser);
            });
        }
      });
  }
};
