const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const ItineraryItem = require("../models/ItineraryItem.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const User = require("../models/User.model");

router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.payload.username });
    console.log(req.payload);
    const userItinerary = await Itinerary.find({
      creator: user._id,
    }).populate("tags");
    res.status(200).json({ userItinerary, user });
  } catch (err) {
    console.error(err, "ERROR ON PROFILE ROUTE!");
  }
});

// GET PUBLIC USER ROUTE
// get user profile, return a list of his itineraries
router.get("/:userId", isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select("name username");
    const itineraries = await Itinerary.find({ creator: userId }).populate(
      "creator tags"
    );
    res.status(200).json({ user, itineraries });
  } catch (err) {
    console.log(err, "ERROR ON PUBLIC USER ROUTE!");
  }
});

// EDIT PROFILE
router.put("/edit", isAuthenticated, async (req, res, next) => {
  try {
    const editUser = await User.findByIdAndUpdate(req.payload._id, req.body, {
      new: true,
    });
    res.status(200).json(editUser);
  } catch (err) {
    console.log(err, "ERROR ON EDIT USER ID ROUTE!");
  }
});

module.exports = router;
