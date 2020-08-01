const express = require("express");
const app = express();
const port = 3333;
const BugReports = require("./db/queries.js");

// app.use(express.static(path.join(__dirname, "")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/bugs", (req, res) => {
  BugReports.getAllBugReports()
    .then((data) => res.send(data))
    .catch((err) =>
      console.log(
        "there is a server-side error wth the getAllBugs GET request",
        err
      )
    );
});

app.post("/api/bugs", (req, res) => {
  console.log("req.body: ", req.body);
  BugReports.addNewBugReport(req.body)
    .then((data) => res.send(data))
    .catch((err) =>
      console.log(
        "there is a server-side error wth the addNewBugReport POST request",
        err
      )
    );
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
