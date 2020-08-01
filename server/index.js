const express = require("express");
const app = express();
const port = 3333;
const BugReports = require('./db/queries.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/bugs", (req, res) => {
  res.send("hello bugs");
});

app.post("/api/bugs", (req, res) => {});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
