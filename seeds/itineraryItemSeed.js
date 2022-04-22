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
    name: "First time visiting Berlin!",
  });

  const itineraryItems = [
    {
      name: "Pizzeria Populare",
      description:
        "Very nice restaurant and atmosphere, but tables were too close to each other. I need my personal space.",
      itinerary: itineraryParis._id,
      address: {
        street: "Rue Réaumur",
        streetNumber: "111",
        postCode: "75002 Paris",
      },
      picture: "https://picsum.photos/200/300",
    },
    {
      name: "Espit Chupitos",
      description: "Loved the chupitos and music, but rude waitresses!! 🙄",
      itinerary: itineraryMadrid._id,
      address: {
        street: "Calle de Espoz y Mina",
        streetNumber: "22",
        postCode: "28012 Madrid",
      },
      picture: "https://picsum.photos/200/300",
    },
    {
      name: "La Seine",
      description:
        "Went for a nice walk along the Seine river with my husband and sons. I wuld have had a much better time without them, but oh well.",
      itinerary: itineraryParis2._id,
      address: {
        street: "Pont Alexandre III",
        streetNumber: "",
        postCode: "75008 Paris",
      },
      picture: "https://picsum.photos/200/300",
    },
    {
      name: "Schleusenkrug",
      description: "I don't know what a Schleusenkrug is but I loved it.",
      itinerary: itineraryBerlin._id,
      address: {
        street: "Kirchhofstraße (BDSM Lounge Berlin)",
        streetNumber: 44,
        postCode: "12055 Berlin",
      },
      picture: "https://picsum.photos/200/300",
    },
    {
      name: "Bar Gaspard",
      description:
        "We found this bar randomly, and what a nice place to drink a good ol' Ricard! ",
      itinerary: itineraryMarseille._id,
      address: {
        street: "Rue Berthelot",
        streetNumber: 4,
        postCode: "13014 Marseille",
      },
      picture: "https://picsum.photos/200/300",
    },
    {
      name: "Parc de la Ciutadella",
      description:
        "Big park with many trees and a nice fountain. Great place to rest, read, do yoga or have a mental breakdown.",
      itinerary: itineraryBarcelona._id,
      address: {
        street: "Carrer de Còrsega (La Pepita)",
        streetNumber: 343,
        postCode: "08037 Barcelona",
      },
      picture: "https://picsum.photos/200/300",
    },
    {
      name: "Bar A la mort subite",
      description:
        "I don't remember anything that happened in this bar. 10/10 would recommend!",
      itinerary: itineraryBrussels._id,
      address: {
        street: "Imp. de la Fidélité (Delirium Café)",
        streetNumber: 4,
        postCode: "1000 Bruxelles",
      },
      picture: "https://picsum.photos/200/300",
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
