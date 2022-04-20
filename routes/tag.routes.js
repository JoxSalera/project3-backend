const router = require("express").Router();
const Tag = require("../models/Tag.model");

// GET ALL TAGS
router.get("/tags", async (req, res, next) => {
  try {
    const allTags = await Tag.find();
    res.status(200).json(allTags);
  } catch {
    console.log(err, "ERROR ON GET /TAG ROUTE");
  }
});

// CREATE NEW TAG
router.post("/new-tag", async (req, res, next) => {
  try {
    const newTag = await Tag.create({
      name: req.body.name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    console.log(err, "ERROR ON TAG ROUTE - POST!");
  }
});

module.exports = router;
