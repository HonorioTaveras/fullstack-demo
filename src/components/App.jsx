import React, { Component } from "react";
import Nav from "./Nav.jsx";
import BugTile from "./BugTile.jsx";
import exampleData from "../example-data/exampleData";
import "../styles/App.scss";
import Axios from "axios";
// import BugTable from './BugTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null,
      isLoaded: false,
      bugs: [],
      filter: "None",
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter });
  }

  componentDidMount() {
    Axios.get("http://localhost:3333/api/bugs")
      .then((res) => {
        console.log("res data: ", res.data);
        this.setState({
          isLoaded: true,
          bugs: res.data,
        });
      })
      .catch((err) => {
        console.log("client-side GET request error ", err);
      });
  }

  render() {
    return (
      <table>
        <Nav filterHandler={this.filterHandler} />
        {this.state.bugs.map((bug) => (
          <BugTile
            bugName={bug.bugName}
            bugDescription={bug.bugDescription}
            reportedBy={bug.reportedBy}
            createdDate={bug.createdDate}
            assignedTo={bug.assignedTo}
            threatLevel={bug.threatLevel}
            key={bug.bugName}
          />
        ))}
      </table>
    );
  }
}

export default App;
