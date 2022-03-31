const db = require("../db/connection");

exports.selectUsers = async (req, res) => {
  const result = await db.query("SELECT * FROM users;");
  return result.rows;
};
