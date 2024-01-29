import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Hello from Google!");
});

app.listen(3000, () => {
  console.log("Hello World");
});

module.exports = app;