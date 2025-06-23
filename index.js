const express = require("express");
const app = express();

// define path
const path = require("path");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static("api"));
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "api", "answers.json"));
});
