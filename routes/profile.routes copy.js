const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const ItineraryItem = require("../models/ItineraryItem.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const User = require("../models/User.model");

router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.payload._id);
    const userItinerary = await Itinerary.find({
      creator: req.payload._id,
    }).populate("tags");
    res.status(200).json({ userItinerary, user });
  } catch (err) {
    console.error(err, "ERROR ON PROFILE ROUTE!");
  }
});

// GET PUBLIC USER ROUTE
router.get("/:userId", async (req, res, next) => {
  try {
    const { publicUserId } = req.params;
    const publicUser = await Itinerary.find(publicUserId).populate(
      "creator tags"
    );
    res.status(200).json({ publicUser });
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
