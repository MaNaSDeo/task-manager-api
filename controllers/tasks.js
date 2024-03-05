const Task = require("../models/Tasks");
const asynWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asynWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asynWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    // const error = new Error("Not Found");
    // error.status = 404;
    // return next(error);
    return next(createCustomError(`No task with id: ${taskId}`, 404));
    // return res.status(404).json({ Message: `No task with id: ${taskId}` });
  }
  res.status(200).json({ task });
});

const createTask = asynWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

const deleteTask = asynWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    // return res.status(404).json({ Message: `No task with id: ${taskId}` });
    return next(createCustomError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asynWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    // return res.status(404).json({ Message: `No task with id: ${taskId}` });
    return next(createCustomError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
