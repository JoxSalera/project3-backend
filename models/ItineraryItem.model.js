const { Schema, model } = require("mongoose");

const itineraryItemSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  itinerary: {
    type: Schema.Types.ObjectId,
    ref: "Itinerary",
  },
  address: {
    street: String,
    streetNumber: Number,
    postCode: String,
  },
  picture: {
    type: String,
  },
  googlePlaceId: {
    type: String,
  },
});

const ItineraryItem = model("ItineraryItem", itineraryItemSchema);

export default ItineraryItem;
