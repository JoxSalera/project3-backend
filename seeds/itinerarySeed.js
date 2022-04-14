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
    },
    {
      name: "Barcelona express",
      creator: rufus._id,
      city: "Barcelona",
      tags: [night._id],
    },
    {
      name: "Berlin express",
      creator: rufus._id,
      city: "Berlin",
      tags: [night._id],
    },
    {
      name: "Paris express",
      creator: rufus._id,
      city: "Paris",
      tags: [night._id],
    },
    {
      name: "Brussels express",
      creator: rufus._id,
      city: "Lille",
      tags: [night._id],
    },
    {
      name: "Marseille express",
      creator: rufus._id,
      city: "Marseille",
      tags: [night._id],
    },
  ];

  const firstItinerary = await Itinerary.create(itineraries);
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
