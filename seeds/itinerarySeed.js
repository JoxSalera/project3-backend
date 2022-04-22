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
      image:
        "https://images.unsplash.com/photo-1531264993164-04a70aa46453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1863&q=80",
      city: "Paris",
      tags: [culture._id, restaurant._id, weekend._id],
    },
    {
      name: "Week-end in Madrid with friends",
      creator: rufus._id,
      image:
        "https://images.unsplash.com/photo-1549310786-a634d453e653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      city: "Madrid",
      tags: [night._id, beers._id, weekend._id],
    },
    {
      name: "1 day in Paris",
      creator: rufus._id,
      image:
        "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      city: "Paris",
      tags: [sunnyday._id, restaurant._id],
    },
    {
      name: "First time visiting Berlin!",
      creator: al._id,
      image:
        "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      city: "Berlin",
      tags: [night._id, culture._id, outdoors._id],
    },
    {
      name: "Sunny Day in Marseille with the fam!",
      creator: rufus._id,
      image:
        "https://images.unsplash.com/photo-1635614273167-708f0466111d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      city: "Marseille",
      tags: [sunnyday._id, beers._id, weekend._id],
    },
    {
      name: "Express trip to Barcelona",
      creator: tintin._id,
      image:
        "https://images.unsplash.com/flagged/photo-1570533136641-42082acf8d0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      city: "Barcelona",
      tags: [sunnyday._id, restaurant._id],
    },
    {
      name: "Awesome week-end in Brussels!!",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1575659868234-aae7cc621f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      city: "Brussels",
      tags: [night._id, beers._id, outdoors._id, culture._id],
    },

    {
      name: "Friends trip in Amsterdam <3",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1583295125721-766a0088cd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      city: "Amsterdam",
      tags: [beers._id, restaurant._id, weekend._id],
    },
    {
      name: "Romantic trip in Venezia",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1638376851565-42db4491b05b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      city: "Amsterdam",
      tags: [beers._id, restaurant._id, weekend._id],
    },
    {
      name: "2 day visit of NYC",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      city: "Amsterdam",
      tags: [beers._id, restaurant._id, weekend._id],
    },
    {
      name: "Lovely week-end in Paris",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1615650102043-deaefad6ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      city: "Paris",
      tags: [beers._id, restaurant._id, weekend._id],
    },
    {
      name: "Family trip - 2 days in Paris",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
      city: "Paris",
      tags: [beers._id, restaurant._id, weekend._id],
    },
    {
      name: "Museums and wine tasting!",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80",
      city: "Paris",
      tags: [beers._id, restaurant._id, weekend._id],
    },
    {
      name: "Family week-end in London",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1615650102043-deaefad6ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      city: "London",
      tags: [beers._id, restaurant._id, weekend._id],
    },
    {
      name: "Amazing Italian getaway with our family",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1568323993156-14d2eeaec2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      city: "Florence",
      tags: [beers._id, restaurant._id, weekend._id],
    },
    {
      name: "Munich: great city to visit with family!",
      creator: daniel._id,
      image:
        "https://images.unsplash.com/photo-1611693088055-f20ef834328a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      city: "Munich",
      tags: [beers._id, restaurant._id, weekend._id],
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
