const router = require("express").Router();
const usersRoutes = require("./users");
const authRoutes = require("./auth");
const itemRoutes = require("./item");

router.use("/users", usersRoutes);
router.use("/auth", authRoutes);
router.use("/item", itemRoutes);

module.exports = router;
