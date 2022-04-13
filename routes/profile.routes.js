const router = require("express").Router();
// const Itinerary = require("../models/ItineraryItem.model");

router.get("/", (req, res, next) => {
  console.log("cc");
  res.json("profile route ok");
});

module.exports = router;
