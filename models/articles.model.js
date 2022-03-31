const db = require("../db/connection");

exports.selectArticles = async (req, res) => {
  const result = await db.query(
    "SELECT * FROM articles ORDER BY created_at DESC;"
  );
  console.log(result.rows, "<< Model");
  return result.rows;
};
