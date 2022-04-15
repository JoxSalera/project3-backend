const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const ItineraryItem = require("../models/ItineraryItem.model");

router.get("/", (req, res, next) => {
  res.json("profile route ok");
});

// Creating itineraries
router.post("/", async (req, res, next) => {
  try {
    const newItinerary = await Itinerary.create(req.body);
    res.json();
  } catch (err) {
    console.log(err, "ERROR ON PROFILE ROUTE - POST!");
  }
});

module.exports = router;
