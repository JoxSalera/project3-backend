const mongoose = require("mongoose");
require("../db/index.js");
const Favorite = require("../models/Favorite.model");
const User = require("../models/User.model");
const Itinerary = require("../models/Itinerary.model");

const favoritesSeed = async () => {
  const user = await User.findOne({ name: "Rufus" });
  const itinerary = await Itinerary.findOne({ name: "Madrid express" });

  const favorites = [
    {
      user: user._id,
      itinerary: itinerary._id,
    },
    {
      user: user._id,
      itinerary: itinerary._id,
    },
    {
      user: user._id,
      itinerary: itinerary._id,
    },
  ];

  const firstFavorites = await Favorite.create(favorites);
};

const createFavorites = async () => {
  try {
    await Favorite.deleteMany();
    await favoritesSeed();
    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};
createFavorites();
