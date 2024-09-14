const asyncHandler = require('../middleware/async');
const Todo = require('../models/todo');

// @desc    Get all tasks
// @route   GET /api/v1/todo
// @access  Public
exports.getTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

// @desc    Add a new todo
// @route   POST /api/v1/todo
// @access  Public
exports.addTodo = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ title });
  res.status(201).json(todo);
});

// @desc    Update a task
// @route   PUT /api/v1/todo/:id
// @access  Public
exports.updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;  

  const todo = await Todo.findByPk(id);
  if (!todo) {
    return res.status(404).json({ message: `Todo with ID ${id} not found` });
  }

  if (title !== undefined) {
    todo.title = title; 
  }

  await todo.save();
  
  res.json(todo);
});

// @desc    Delete a task
// @route   DELETE /api/v1/todo/:id
// @access  Public
exports.deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Todo.destroy({ where: { id } });
  res.json({ message: 'Todo deleted' });
});
