const db = require("../db/connection");

exports.selectArticles = async () => {
  const query =
    "SELECT articles.*, count(comments.comment_id) FROM articles  LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY created_at DESC;";
  const result = await db.query(query);
  return result.rows;
};
