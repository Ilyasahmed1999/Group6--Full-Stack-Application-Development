const router = require("express").Router();
const {
  createResistance,
  getResistanceById,
  deleteResistance,
} = require("../../controllers/resistance-controller");

const {
  createCardio,
  getCardioById,
  deleteCardio,
} = require("../../controllers/cardio-controller");

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.use(authMiddleware);


router.route("/activityLog").post(createCardio);


router.route("/activityLog/:id").get(getCardioById).delete(deleteCardio);


router.route("/workoutPlans").post(createResistance);


router.route("/workoutPlans/:id").get(getResistanceById).delete(deleteResistance);

module.exports = router;
