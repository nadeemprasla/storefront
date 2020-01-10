const db = require("../models");

module.exports = {
  getItem: async function (req, res) {
    let id = req.body.user.id;
    let date = req.body.date;
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
  postItem: function (req, res) {
    let id = req.body.user.id;
    let date = req.body.date;
    let data = { ...req.body.item, date };
    db.Users.findOne({ _id: id })
      .populate("item")
      .then(userFound => {
        if (userFound.item.length >= 1) {
          let result = userFound.item.filter(e => {
            let itemDate = e.date.toString().slice(4, 15);
            if (itemDate === date) return e;
          });
          if (result.length >= 1) {
            db.Item.findOneAndUpdate(
              { _id: result[0].id },
              { ...req.body.item },
              { new: true }
            ).then(updatedItem => {
              res.json(updatedItem)
            });
          }
          else {
            let pushItem;
            db.Item.create(data)
              .then(addedItem => {
                pushItem = addedItem
                return db.Users.findOneAndUpdate(
                  { _id: id },
                  {"$push": { item: addedItem._id }},
                  { new: true }
                );
              })
              .then(updatedUser => {
                res.json(pushItem)
              });
          }

        }
        else {
          let pushItem;
          db.Item.create(data)
            .then(addedItem => {
              pushItem = addedItem
              return db.Users.findOneAndUpdate(
                { _id: id },
                {"$push": { item: addedItem._id }},
                { new: true }
              );
            })
            .then(updatedUser => {
              res.json(pushItem)
            });
        }
      });
  },
};
