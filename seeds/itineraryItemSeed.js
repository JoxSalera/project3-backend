const mongoose = require("mongoose");
require("../db/index.js");
const ItineraryItem = require("../models/ItineraryItem.model");
const Itinerary = require("../models/Itinerary.model");

const itineraryItemsSeed = async () => {
  const itineraryId = await Itinerary.findOne({ name: "Barcelona express" });

  const itineraryItems = [
    {
      name: "Green Places",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryId._id,
      address: {
        street: "Pl. de la Concorde",
        streetNumber: "",
        postCode: "75001 Paris",
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
        street: "Pont Alexandre III",
        streetNumber: "",
        postCode: "75008 Paris",
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
        street: "Kirchhofstraße (BDSM Lounge Berlin)",
        streetNumber: 44,
        postCode: "12055 Berlin",
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
        street: "Rue Berthelot",
        streetNumber: 4,
        postCode: "13014 Marseille",
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
        street: "Carrer de Còrsega (La Pepita)",
        streetNumber: 343,
        postCode: "08037 Barcelona",
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
        street: "Imp. de la Fidélité (Delirium Café)",
        streetNumber: 4,
        postCode: "1000 Bruxelles",
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
