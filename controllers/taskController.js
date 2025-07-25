const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, user: req.user._id });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task" });
  }
};

const getTasks = async (req, res) => {
  try {
    const { status, sort, search, page = 1, limit = 10 } = req.query;
    const query = {};

    if (req.user.role !== "manager") {
      query.user = req.user._id;
    }
    if (status) query.status = status;
    if (search) query.$or = [
      { title: new RegExp(search, "i") },
      { description: new RegExp(search, "i") }
    ];

    const sortOption = sort ? { [sort.split(":")[0]]: sort.split(":")[1] === "desc" ? -1 : 1 } : {};

    const tasks = await Task.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

  res.status(200).json({ tasks }); // 👈 should be wrapped inside an object

  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.user.toString() !== req.user._id.toString() && req.user.role !== "manager") {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Check if user is owner or manager
    if (task.user.toString() !== req.user._id.toString() && req.user.role !== "manager") {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Task.findByIdAndDelete(req.params.id); // Proper deletion
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ message: "Error deleting task" });
  }
};


module.exports = { createTask, getTasks, updateTask, deleteTask };