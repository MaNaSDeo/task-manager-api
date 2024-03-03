const getAllTasks = (req, res) => {
  res.send("Get all items");
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTask = (req, res) => {
  res.json(req.body);
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

// TayXIU7ZeoQ0OCKO