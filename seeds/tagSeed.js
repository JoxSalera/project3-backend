const mongoose = require("mongoose");
require("../db/index.js");
const Tag = require("../models/Tag.model");

const tag = [
  { name: "night" },
  { name: "beers" },
  { name: "restaurant" },
  { name: "week-end" },
  { name: "sunny day" },
  { name: "culture" },
  { name: "outdoors" },
];

const createTag = async () => {
  try {
    await Tag.deleteMany();
    const tagFromDB = await Tag.create(tag);
    console.log(tagFromDB);
    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};
createTag();
