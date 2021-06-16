import "./App.css";
import React, { Component } from "react";
import UserTable from "./components/UserTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserTable title="Fetch API" />
      </div>
    );
  }
}

export default App;
