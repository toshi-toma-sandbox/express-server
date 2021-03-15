const express = require("express");
const app = express();

// Serving statig files
app.use(express.static("public"));

const server = app.listen(3000, () => {
  console.log("🚀 Server is listening to POST:", server.address().port);
});

app.get("/api/users", (req, res, next) => {
  res.json(["user1", "user2"]);
});

app.get("/api/user/:userId", (req, res, next) => {
  res.json({
    id: req.params.userId,
    name: "toshi",
  });
});
