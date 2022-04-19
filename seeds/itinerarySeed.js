const mongoose = require("mongoose");
require("../db/index.js");
const Itinerary = require("../models/Itinerary.model");
const User = require("../models/User.model");
const Tag = require("../models/Tag.model");

const itinerarySeed = async () => {
  const rufus = await User.findOne({ name: "Rufus" });
  const tintin = await User.findOne({ name: "Tintin" });
  const al = await User.findOne({ name: "Al" });
  const daniel = await User.findOne({ name: "Daniel" });

  const night = await Tag.findOne({ name: "night" });
  const beers = await Tag.findOne({ name: "beers" });
  const restaurant = await Tag.findOne({ name: "restaurant" });
  const weekend = await Tag.findOne({ name: "week-end" });
  const sunnyday = await Tag.findOne({ name: "sunny day" });
  const outdoors = await Tag.findOne({ name: "outdoors" });
  const culture = await Tag.findOne({ name: "culture" });

  const itineraries = [
    {
      name: "Paris express",
      creator: daniel._id,
      city: "Paris",
      tags: [night._id, restaurant._id, weekend._id],
    },
    {
      name: "Madrid express",
      creator: rufus._id,
      city: "Madrid",
      tags: [night._id, beers._id, weekend._id],
    },
    {
      name: "Paris life",
      creator: rufus._id,
      city: "Paris",
      tags: [sunnyday._id, weekend._id],
    },
    {
      name: "Berlin express",
      creator: al._id,
      city: "Berlin",
      tags: [night._id, culture._id, outdoors._id],
    },
    {
      name: "Marseille express",
      creator: rufus._id,
      city: "Marseille",
      tags: [sunnyday._id, restaurant._id, weekend._id],
    },
    {
      name: "Barcelona express",
      creator: tintin._id,
      city: "Barcelona",
      tags: [sunnyday._id, restaurant._id],
    },
    {
      name: "Brussels express",
      creator: daniel._id,
      city: "Brussels",
      tags: [night._id, beers._id, outdoors._id, culture._id],
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
