const router = require("express").Router();
const Itinerary = require("../models/ItineraryItem.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// GET itineraries
router.get("/itinerary", (req, res, next) => {
  res.json("itinerary ok");
});

module.exports = router;
