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
      name: "Touristy day in Paris :)",
      creator: daniel._id,
      city: "Paris",
      tags: [culture._id, restaurant._id, weekend._id],
    },
    {
      name: "Week-end in Madrid with friends",
      creator: rufus._id,
      city: "Madrid",
      tags: [night._id, beers._id, weekend._id],
    },
    {
      name: "1 day in Paris",
      creator: rufus._id,
      city: "Paris",
      tags: [sunnyday._id, restaurant._id],
    },
    {
      name: "First time visiting Berlin!",
      creator: al._id,
      city: "Berlin",
      tags: [night._id, culture._id, outdoors._id],
    },
    {
      name: "Sunny Day in Marseille with the fam!",
      creator: rufus._id,
      city: "Marseille",
      tags: [sunnyday._id, restaurant._id, weekend._id],
    },
    {
      name: "Express trip to Barcelona",
      creator: tintin._id,
      city: "Barcelona",
      tags: [sunnyday._id, restaurant._id],
    },
    {
      name: "Awesome week-end in Brussels!!",
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
