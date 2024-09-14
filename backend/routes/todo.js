const express = require("express");
const {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodo,
} = require("../controllers/todo");

const router = express.Router();

router.route("/").get(getTodo).post(addTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);
router.route("/delete/all").delete(deleteAllTodo);

module.exports = router;
