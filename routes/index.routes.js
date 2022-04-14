const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const ItineraryItem = require("../models/ItineraryItem.model");
const Tag = require("../models/Tag.model");
const User = require("../models/User.model");

// GET itineraries & populate the tags and users
router.get("/", async (req, res, next) => {
  const itineraries = await Itinerary.find().populate("creator tags");
  res.json(itineraries);
});

router.get("/itinerary", async (req, res, next) => {
  const itineraryDetails = await ItineraryItem.find().populate("itinerary");
  res.json(itineraryDetails);
});

module.exports = router;
