const db = require("../models");

module.exports = {
  getItem: async function(req, res) {
    let id = req.body.user._id;
    let date = req.body.date;
    db.Users.findOne({ _id: id })
      .populate("item")
      .then(userFound => {
        let result = userFound.item.filter(e => {
          let itemDate = e.date.toString().slice(4, 15);
          if (itemDate === date) return e;
        });
        res.json(result[0]);

        // db.Item.create(data).then(addedItem => {
        //     console.log("added Item      ",addedItem)
        //     return db.Users.findOneAndUpdate({ _id: id }, { item: addedItem._id }, { new: true })
        // }).then((updatedUser)=>{
        //     console.log("updated Item       ",updatedUser)
        // });
      });
  },
  postItem: function(req, res) {
    console.log("PostItem Req Body      ", req.body.item);
    let id = req.body.user._id;
    let date = req.body.date;
    let data = { ...req.body.cashReceived, ...req.body.cashPaid };
    db.Users.findOne({ _id: id })
      .populate("item")
      .then(userFound => {
        // console.log("Userfound       ", userFound);
        let result = userFound.item.filter(e => {
          let itemDate = e.date.toString().slice(4, 15);
          if (itemDate === date) return e;
        });
        // console.log("result     ",result);
        if (result) {
          db.Item.findOneAndUpdate(
            { _id: result[0]._id },
            { ...req.body.item },
            { new: true }
          ).then(updatedItem => {
            console.log("updatedItem   once filtered   ", updatedItem);
          });
        } else {
          db.Item.create(data).then(addedItem => {
              return db.Users.findOneAndUpdate({ _id: id }, { item: addedItem._id }, { new: true })
          }).then((updatedUser)=>{
              console.log("created Item       ",updatedUser)
          });
        }
      });
  }
};
