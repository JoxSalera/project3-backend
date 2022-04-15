// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");

// const Itinerary = require("../models/Itinerary.model");
// const ItineraryItem = require("../models/ItineraryItem.model");

// //  POST /api/itineraries  -  Creates a new itinerary
// router.post("/itineraries", (req, res, next) => {
//   const { name, creator, city } = req.body;

//   Itinerary.create({ name, creator, city, tags: [] })
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err));
// });

// //  GET /api/itineraries -  Retrieves all of the itineraries
// router.get("/itineraries", (req, res, next) => {
//   Itinerary.find()
//     .populate("tasks")
//     .then((allItineraries) => res.json(allItineraries))
//     .catch((err) => res.json(err));
// });

// //  GET /api/projects/:projectId -  Retrieves a specific project by id
// router.get("/projects/:projectId", (req, res, next) => {
//   const { projectId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(projectId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   // Each Project document has `tasks` array holding `_id`s of Task documents
//   // We use .populate() method to get swap the `_id`s for the actual Task documents
//   Project.findById(projectId)
//     .populate("tasks")
//     .then((project) => res.status(200).json(project))
//     .catch((error) => res.json(error));
// });

// // PUT  /api/projects/:projectId  -  Updates a specific project by id
// router.put("/projects/:projectId", (req, res, next) => {
//   const { projectId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(projectId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Project.findByIdAndUpdate(projectId, req.body, { new: true })
//     .then((updatedProject) => res.json(updatedProject))
//     .catch((error) => res.json(error));
// });

// // DELETE  /api/projects/:projectId  -  Deletes a specific project by id
// router.delete("/projects/:projectId", (req, res, next) => {
//   const { projectId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(projectId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Project.findByIdAndRemove(projectId)
//     .then(() =>
//       res.json({
//         message: `Project with ${projectId} is removed successfully.`,
//       })
//     )
//     .catch((error) => res.json(error));
// });

// module.exports = router;
