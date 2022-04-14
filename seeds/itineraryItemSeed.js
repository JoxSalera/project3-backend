const mongoose = require("mongoose");
require("../db/index.js");
const ItineraryItem = require("../models/ItineraryItem.model");
const Itinerary = require("../models/Itinerary.model");

const itineraryItemsSeed = async () => {
  const itineraryId = await Itinerary.findOne({ name: "Madrid express" });

  const itineraryItems = [
    {
      name: "Green Places",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryId._id,
      address: {
        street: "Louvre",
        streetNumber: 125,
        postCode: 75001,
      },
      picture: "",
      googlePlaceId: "",
    },
    {
      name: "La Seine",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryId._id,
      address: {
        street: "Louvre",
        streetNumber: 125,
        postCode: 75001,
      },
      picture: "",
      googlePlaceId: "",
    },
    {
      name: "Das Saucissen",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryId._id,
      address: {
        street: "Louvre",
        streetNumber: 125,
        postCode: 75001,
      },
      picture: "",
      googlePlaceId: "",
    },
    {
      name: "Ricard Time",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryId._id,
      address: {
        street: "Louvre",
        streetNumber: 125,
        postCode: 75001,
      },
      picture: "",
      googlePlaceId: "",
    },
    {
      name: "Catalan route",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryId._id,
      address: {
        street: "Louvre",
        streetNumber: 125,
        postCode: 75001,
      },
      picture: "",
      googlePlaceId: "",
    },
    {
      name: "A l'aise",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryId._id,
      address: {
        street: "Louvre",
        streetNumber: 125,
        postCode: 75001,
      },
      picture: "",
      googlePlaceId: "",
    },
  ];

  const firstItinerarySeed = await ItineraryItem.create(itineraryItems);
};

const createItineraryItem = async () => {
  try {
    await ItineraryItem.deleteMany();
    await itineraryItemsSeed();
    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};
createItineraryItem();
