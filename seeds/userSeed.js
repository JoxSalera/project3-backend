const mongoose = require("mongoose");
require("../db/index.js");
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const password = "12345";
const hashPassword = bcrypt.hashSync(password);

const user = [
  {
    name: "Rufus",
    username: "LeRufus",
    email: "rufus@hacker.fr",
    password: hashPassword,
  },
  {
    name: "Tintin",
    username: "Tintin33",
    email: "tintin@hacker.fr",
    password: hashPassword,
  },
  {
    name: "Al",
    username: "Al1",
    email: "al@hacker.fr",
    password: hashPassword,
  },
  {
    name: "Daniel",
    username: "Dani31",
    email: "daniel@hacker.fr",
    password: hashPassword,
  },
];

const createUser = async () => {
  try {
    await User.deleteMany();
    const userFromDB = await User.create(user);
    console.log(userFromDB);
    await mongoose.connection.close();
  } catch (err) {
    console.error("An error occurred while creating users from the DB");
  }
};
createUser();
