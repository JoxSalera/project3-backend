const { Schema, model } = require("mongoose");

const favoritesSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    itinerary: { type: Schema.Types.ObjectId, ref: "Itinerary" },
  },
  { timestamp: true }
);

const Favorite = model("Favorite", favoritesSchema);

module.exports = Favorite;
