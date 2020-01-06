const router = require("express").Router();
const authController = require("../../controllers/authController");

// "/api/auth"
router.route("/")
  .post(authController.verifyUser)

router.route("/login")
  .post(authController.login);
  
module.exports = router;
