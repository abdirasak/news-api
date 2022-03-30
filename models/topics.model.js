const db = require("../db/connection");

exports.selectTopics = async (req, res) => {
  const result = await db.query("SELECT * FROM topics");
  //   if (result.rows.length === 0) {
  //     console.log("somthing");
  //     return Promise.reject({ status: 404, msg: "path not found" });
  //   }
  return result.rows;
};
