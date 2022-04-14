const { Schema, model } = require("mongoose");

const favoritesSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    itinerary: { type: Schema.Types.ObjectId, ref: "Itinerary" },
  },
  { timestamp: true }
);

const Favorites = model("Tag", favoritesSchema);

module.exports = Favorites;
