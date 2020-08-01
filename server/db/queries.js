const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bugs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
var bugReportsSchema = new Schema({
  bugName: String,
  bugDescription: String,
  reportedBy: String,
  createdDate: String,
  assignedTo: String,
  threatLevel: String,
});

var BugReports = mongoose.model("BugReports", bugReportsSchema);

const getAllBugReports = () => {
  return BugReports.find({});
};

const addNewBugReport = (bugReport) => {
  return BugReports.create(bugReport);
};

module.exports = {
  getAllBugReports,
  addNewBugReport,
};
