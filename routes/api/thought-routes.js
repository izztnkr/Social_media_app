const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  addReaction,
  removeThought,
  removeReaction,
} = require("../../controllers/thought-controller");

//routes to get all thoughts and add thought
router.route("/").get(getAllThoughts).post(addThought);

//routes to get a singular thought, delete the thought, and update a thought. All by Id
router
  .route("/:id")
  .get(getThoughtById)
  .delete(removeThought)
  .put(updateThought);

//route to add a reaction to a Thought
router.route("/:id/reactions").post(addReaction);

//route to delete a reaction by Id
router.route("/:id/reactions/:reactionId").delete(removeReaction);

module.exports = router;
