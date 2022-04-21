const mongoose = require("mongoose");
require("../db/index.js");
const ItineraryItem = require("../models/ItineraryItem.model");
const Itinerary = require("../models/Itinerary.model");

const itineraryItemsSeed = async () => {
  const itineraryBarcelona = await Itinerary.findOne({
    name: "Express trip to Barcelona",
  });
  const itineraryMadrid = await Itinerary.findOne({
    name: "Week-end in Madrid with friends",
  });
  const itineraryMarseille = await Itinerary.findOne({
    name: "Sunny Day in Marseille with the fam!",
  });
  const itineraryParis = await Itinerary.findOne({ name: "1 day in Paris" });
  const itineraryParis2 = await Itinerary.findOne({
    name: "Touristy day in Paris :)",
  });

  const itineraryBrussels = await Itinerary.findOne({
    name: "Awesome week-end in Brussels!!",
  });
  const itineraryBerlin = await Itinerary.findOne({
    name: "First time visiting Berlin",
  });

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
