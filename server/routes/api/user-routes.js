const router = require("express").Router();
const { createUser, login, getSingleUser } = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");


router.route("/").post(createUser)

// /api/user/login for user login
router.route("/login").post(login);

// /api/user/me to get single user data
router.route('/me').get(authMiddleware, getSingleUser);


module.exports = router;