const express = require("express");
const app = express();
const fs = require("fs");

// define path
const path = require("path");

const PORT = 3000;

app.use(express.json);

app.use(express.urlencoded({ extended: true }));

app.use(express.static("api"));
// app.use(express.static("public"));
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "api", "answers.json"));
});

app.post("/submitted", (req, res) => {
  fs.readFile(
    path.join(__dirname, "api", "answers.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Could not read answers file" });
      }
      const answers = JSON.parse(data);

      // Compare submitted data with answers
      const { name, quest, color } = req.body;
      const isMatch =
        name === answers.name &&
        answers.quest.includes(quest) &&
        color === answers.color;

      if (isMatch) {
        res.json({ success: true, message: "Correct!" });
      } else {
        res.json({ success: false, message: "Incorrect. Try again!" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
