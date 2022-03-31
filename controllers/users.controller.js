const { selectUsers } = require("../models/users.model");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await selectUsers();
    res.send({ users });
  } catch (err) {
    next(err);
  }
};
