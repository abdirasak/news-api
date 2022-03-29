const { queryTopics } = require("../models /topics.models");

exports.getTopics = async (req, res) => {
  try {
    const topics = await queryTopics();
    res.send(topics);
  } catch (err) {
    next(err);
  }
};
