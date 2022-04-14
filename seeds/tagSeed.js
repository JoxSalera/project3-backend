const mongoose = require("mongoose");
require("../db/index.js");
const Tag = require("../models/Tag.model");

const tag = [
  { name: "resto" },
  { name: "week-end" },
  { name: "night" },
  { name: "culture" },
  { name: "sunny day" },
  { name: "beers" },
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
