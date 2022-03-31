const { selectArticles } = require("../models/articles.model");

exports.getArticles = async (req, res, next) => {
  try {
    const articles = await selectArticles();
    res.send({ articles });
  } catch (error) {
    console.log(error);
  }
};
