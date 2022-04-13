const mongoose = require("mongoose");
require("../db/index.js");
const Itinerary = require("../models/Itinerary.model");
const User = require("../models/User.model");
const Tag = require("../models/Tag.model");

const itinerarySeed = async () => {
  const rufus = await User.findOne({ name: "Rufus" });
  const night = await Tag.findOne({ name: "night" });

  const itineraries = [
    {
      name: "Madrid express",
      creator: rufus._id,
      city: "Madrid",
      tags: [night._id],
      timeStamps: true,
    },
  ];
  //   const firstItinerary = await Itinerary.create(itineraries);

  //   const itineraryItems = await Itinerary.create(firstItinerary);
};

const createItinerary = async () => {
  try {
    await Itinerary.deleteMany();
    await itinerarySeed();
    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};
createItinerary();
