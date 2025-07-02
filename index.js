const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const answers = require("./api/answers.json");

// define path
const path = require("path");

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(cors());

app.get("/api/answers", (req, res) => {
  res.json(answers);
});
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
