const express = require("express");
const { getTopics } = require("./controllers/topics.controller");

const app = express();
app.use(express.json());

app.get("/api/topics", getTopics);

//path not found middleware
app.use((req, res, next) => {
  res.status(404).send({ msg: "path not found" });
});

//handle unexpected error
app.use((err, req, res, next) => {
  console.log(err, "<< err >>");
  res.status(500).send({ msg: "internal server error" });
});

module.exports = app;
