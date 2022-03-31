const { selectTopics } = require("../models/topics.model");

exports.getTopics = async (req, res, next) => {
  try {
    const topics = await selectTopics();
    res.send({ topics });
  } catch (err) {
    next(err);
  }
};
