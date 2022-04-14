const { Schema, model } = require("mongoose");

const itinerarySchema = new Schema(
  {
    name: {
      type: String,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    city: {
      type: String,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
  },
  { timeStamps: true }
);

const Itinerary = model("Itinerary", itinerarySchema);

module.exports = User;
