const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// "/api/item"
router.route("/")
  .post(itemController.getItem)

  router.route("/addItem")
  .post(itemController.postItem)

  
module.exports = router;
