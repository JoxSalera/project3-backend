const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const Tag = require("../models/Tag.model");
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// GET itineraries & populate the tags and users
router.get("/itinerary", async (req, res, next) => {
  const itineraries = await Itinerary.find().populate("creator tags");
  res.json(itineraries);
});

module.exports = router;
