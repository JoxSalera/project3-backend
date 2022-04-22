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
      picture:
        "https://images.unsplash.com/photo-1627626775846-122b778965ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
      picture:
        "https://images.unsplash.com/photo-1598373728278-73ad46eaa0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
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
      picture:
        "https://images.unsplash.com/photo-1537125267200-ca6a358c1947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
      picture:
        "https://images.unsplash.com/photo-1585325701165-351af916e581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2F1c2FnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
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
      picture:
        "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
      picture:
        "https://images.unsplash.com/photo-1576516250828-3a336a4d65be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
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
      picture:
        "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
