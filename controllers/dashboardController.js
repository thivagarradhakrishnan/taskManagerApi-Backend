const Task = require("../models/Task");

const getDashboardStats = async (req, res) => {
  try {
    const match = req.user.role === "manager" ? {} : { user: req.user._id };

    const totalTasks = await Task.countDocuments(match);
    const statusCounts = await Task.aggregate([
      { $match: match },
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    const stats = {
      totalTasks,
      statusBreakdown: statusCounts.reduce((acc, cur) => {
        acc[cur._id] = cur.count;
        return acc;
      }, {})
    };

    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: "Error fetching dashboard" });
  }
};

module.exports = { getDashboardStats };