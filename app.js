const express = require("express");
const { getTopics } = require("./controllers/topics.controller");

const app = express();
app.use(express.json());

app.get("/api/topics", getTopics);

//custom errors
app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

//handle unexpected error
app.use((err, req, res, next) => {
  console.log(err, "<< err >>");
  res.status(500).send({ msg: "internal server error" });
});

module.exports = app;
