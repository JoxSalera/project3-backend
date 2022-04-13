const router = require("express").Router();
// Handles password encryption
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
// Requires necessary middleware in order to control access to specific routes
const { isAuthenticated } = require("../middleware/jwt.middleware");
// Requires the User model in order to interact with the database
const User = require("../models/User.model");

router.post("/auth/signup", async (req, res, next) => {
  const { name, username, email, password, picture } = req.body;

  const foundUser = await User.findOne({ username });

  if (foundUser) {
    res.status(400).json({ error: "Username already taken" });
    return;
  }

  // How many rounds should bcrypt run the salt (default [10 - 12 rounds])
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const createdUser = await User.create({
    name,
    username,
    email,
    password: hashedPassword,
    picture,
  });

  res.status(201).json(createdUser);
});

router.post("/auth/login", async (req, res, next) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username, password });

  if (!foundUser) {
    res.status(401).json({ error: "Credentials not found" });
    return;
  }

  if (bcrypt.compareSync(password, foundUser.password)) {
    const payload = { username };

    const authToken = jsonwebtoken.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });
    res.status(200).send({ authToken: authToken });
    return;
  } else {
    res.status(401).json({ error: "Credentials not found" });
  }
}); // End of router.post

// To verify that authentication middleware is working Postman
router.get("/auth/verify", isAuthenticated, (req, res, next) => {
  res.status(200).json(req.payload);
});

module.exports = router;
