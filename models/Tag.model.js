const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
  },
});

const Tag = model("Tag", tagSchema);

export default Tag;
