const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const authController = require("../../controllers/authController");

// Matches with "/api/users"
router.route("/register")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/login")
    .post(authController.login);


// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
