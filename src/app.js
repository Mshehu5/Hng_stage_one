const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    slackUsername: "Shehu",
    backend: true,
    age: 23,
    bio: "I'm a Computer Engineering Student at A.B.U Zaria I like building applications",
  });
});

app.listen(5000, () => {
  console.log("Server is running");
});
