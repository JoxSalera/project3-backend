const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const ItineraryItem = require("../models/ItineraryItem.model");
const Tag = require("../models/Tag.model");
const User = require("../models/User.model");

// GET itineraries & populate the tags and users
router.get("/", async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find().populate("creator tags");
    res.json(itineraries);
  } catch (err) {
    console.log(err, "ERROR ON HOME ROUTE!");
  }
});

router.get("/itinerary/:itineraryId", async (req, res, next) => {
  try {
    const { itineraryId } = req.params;
    const itineraryDetails = await ItineraryItem.find({
      itinerary: itineraryId,
    }).populate("itinerary");
    console.log(itineraryDetails);
    res.json(itineraryDetails);
  } catch (err) {
    console.log(err, "ERROR ON ITINERARY/ID PAGE!");
  }
});

module.exports = router;
