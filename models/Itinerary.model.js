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
    image: {
      type: String,
      default: "https://images.unsplash.com/photo-1570698473651-b2de99bae12f",
    },
  },
  { timestamps: true }
);

const Itinerary = model("Itinerary", itinerarySchema);

module.exports = Itinerary;
