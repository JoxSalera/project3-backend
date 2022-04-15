const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const ItineraryItem = require("../models/ItineraryItem.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const User = require("../models/User.model");

router.get("/", isAuthenticated, async (req, res, next) => {
  const username = await User.findOne({ username: req.payload.username });
  res.json(username, "Username found");
});

router.get("/:userId", (req, res, next) => {
  res.json("profile route ok");
});

// EDIT PROFILE
// router.put("/edit/:userId");

module.exports = router;
