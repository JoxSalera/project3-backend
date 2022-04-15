const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const ItineraryItem = require("../models/ItineraryItem.model");

router.get("/", (req, res, next) => {
  res.json("profile route ok");
});

module.exports = router;
