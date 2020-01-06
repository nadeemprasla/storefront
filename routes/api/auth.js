const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/")
  .get(authController.verifyUser)

module.exports = router;
