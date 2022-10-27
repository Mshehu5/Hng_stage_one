const express = require("express");
const app = express();
const cors = require("cors");
const { details } = require("./data");
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json(details);
});

app.listen(5000, () => {
  console.log("Server is running");
});
