import './App.css';
import React, { Component } from "react";
import FetchComponent from "./components/FetchComponent";

class App extends Component {

  render() {
    return (
      <div>
        <FetchComponent title="Fetch API" />
      </div>
    );
  }
}

export default App;
