const router = require("express").Router();
const Itinerary = require("../models/Itinerary.model");
const ItineraryItem = require("../models/ItineraryItem.model");
const Tag = require("../models/Tag.model");
const User = require("../models/User.model");

// GET ALL ITINERARIES
router.get("/itineraries", async (req, res, next) => {
  try {
    const q = req.query.q;
    console.log(q);
    const allItineraries = await Itinerary.find({
      $or: [
        { city: { $regex: q, $options: "i" } },
        { name: { $regex: q, $options: "i" } },
      ],
    }).populate("creator tags");
    res.status(200).json(allItineraries);
  } catch (err) {
    console.log(err, "ERROR ON GET /ITINERARIES ROUTE");
  }
});

// GET ITINERARY DETAILS
router.get("/itinerary/:itineraryId", async (req, res, next) => {
  try {
    const { itineraryId } = req.params;
    const itineraryDetails = await ItineraryItem.find({
      itinerary: itineraryId,
    });
    const itinerary = await Itinerary.findById(itineraryId).populate(
      "tags creator"
    );
    res.status(200).json({ itineraryDetails, itinerary });
  } catch (err) {
    console.log(err, "ERROR ON ITINERARY/:ID PAGE!");
  }
});

// CREATE ITINERARIES
router.post("/new-itinerary", async (req, res, next) => {
  try {
    const foundUser = User.findOne({ username: req?.payload?.username });
    const newItinerary = await Itinerary.create({
      name: req.body.name,
      city: req.body.city,
      tags: req.body.tags,
      creator: foundUser?._id,
    });
    const items = req.body.items.map((item) => {
      const betterItem = { ...item, itinerary: newItinerary._id };
      return betterItem;
    });
    const newItems = await ItineraryItem.create(items);
    res.status(201).json({
      newItems,
      newItinerary,
      message: "Itinerary and its items created!",
    });
  } catch (err) {
    console.log(err, "ERROR ON PROFILE ROUTE - POST!");
  }
});

// UPDATE
router.put("/edit-itinerary/:itineraryId", async (req, res, next) => {
  try {
    // First we update the itinerary document
    const { itineraryId } = req.params;
    const itineraryToCreate = {
      name: req.body.name,
      city: req.body.city,
      tags: req.body.tags,
    };
    const editItinerary = await Itinerary.findByIdAndUpdate(
      itineraryId,
      itineraryToCreate
    );

    // Then we update the items related to that itinerary
    for (let i = 0; i < req.body.items.length; i++) {
      const item = req.body.items[i];
      console.log(item);
      const updatedItem = await ItineraryItem.findByIdAndUpdate(
        item._id,
        item,
        { new: true }
      );
      console.log(updatedItem);
    }

    res.status(200).json([editItinerary, { message: "Itinerary updated!!" }]);
  } catch (err) {
    console.log(err);
  }
});

// DELETE
router.delete("/delete-itinerary/:itineraryId", async (req, res, next) => {
  try {
    const { itineraryId } = req.params;
    const deleteItinerary = await Itinerary.findByIdAndDelete(itineraryId);
    res.status(200).json({ deleteItinerary, message: "Itinerary deleted!!" });
  } catch (err) {
    console.log(err, "ERROR ON DELETE ITINERARY ROUTE");
  }
});

// DELETE ITEMS
router.delete("/delete-itinerary-item/:itemId", async (req, res, next) => {
  try {
    const { itineraryItemId } = req.params;
    const deleteItineraryItem = await ItineraryItem.findByIdAndDelete(
      itineraryItemId
    );
    res
      .status(200)
      .json({ deleteItineraryItem, message: "Itinerary item deleted!!" });
  } catch (err) {
    console.log(err, "ERROR ON DELETE ITINERARY ROUTE");
  }
});

module.exports = router;
