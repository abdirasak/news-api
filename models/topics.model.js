const db = require("../db/connection");

exports.selectTopics = async (req, res) => {
  const result = await db.query("SELECT * FROM topics;");
  return result.rows;
};
