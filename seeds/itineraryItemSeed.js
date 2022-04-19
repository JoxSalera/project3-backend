const mongoose = require("mongoose");
require("../db/index.js");
const ItineraryItem = require("../models/ItineraryItem.model");
const Itinerary = require("../models/Itinerary.model");

const itineraryItemsSeed = async () => {
  const itineraryBarcelona = await Itinerary.findOne({
    name: "Barcelona express",
  });
  const itineraryMadrid = await Itinerary.findOne({ name: "Madrid express" });
  const itineraryMarseille = await Itinerary.findOne({
    name: "Marseille express",
  });
  const itineraryParis = await Itinerary.findOne({ name: "Paris express" });
  const itineraryParis2 = await Itinerary.findOne({ name: "Paris life" });

  const itineraryBrussels = await Itinerary.findOne({
    name: "Brussels express",
  });
  const itineraryBerlin = await Itinerary.findOne({ name: "Berlin express" });

  const itineraryItems = [
    {
      name: "Green Places",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryParis._id,
      address: {
        street: "Pl. de la Concorde",
        streetNumber: "",
        postCode: "75001 Paris",
      },
      picture: "",
      googlePlaceId: "",
    },
    {
      name: "Gato callejero",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryMadrid._id,
      address: {
        street: "Puerta del Sol",
        streetNumber: "",
        postCode: "28013 Madrid",
      },
      picture: "",
      googlePlaceId: "",
    },
    {
      name: "La Seine",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
      itinerary: itineraryParis2._id,
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
      itinerary: itineraryBerlin._id,
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
      itinerary: itineraryMarseille._id,
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
      itinerary: itineraryBarcelona._id,
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
      itinerary: itineraryBrussels._id,
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
