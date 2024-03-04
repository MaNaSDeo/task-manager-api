const Task = require("../models/Tasks");

const getAllTasks = (req, res) => {
  res.send("Get all items");
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ Message: error });
  }
};
const updateTask = (req, res) => {
  res.send("update item");
};
const deleteTask = (req, res) => {
  res.send("delete items");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
