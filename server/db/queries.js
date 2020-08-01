const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bugs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var bugReportsSchema = mongoose.Schema({
  bugName: String,
  bugDescription: String,
  reportedBy: String,
  createdDate: String,
  assignedTo: String,
  threatLevel: String,
});

var BugReports = mongoose.model("BugReports", bugReportsSchema);

const getAllBugReports = () => {

}

const addNewBugReport = () => {

}
module.exports = {
  getAllBugReports,
  addNewBugReport
};
