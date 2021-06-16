import React, { Component } from "react";
import fetchJSON from "../functions/fetchJSON";

class UserTable extends Component {
  constructor(props) {
    super(props);

    this.loadData = this.loadData.bind(this);

    /* Placeholder table until we load the data */
    this.state = {
      data: {
        identity: {
          id: null,
          login: null,
        },
        permissions: {
          roles: null,
        },
      },
    };
  }

  async loadData() {
    this.setState({
      data: await fetchJSON(),
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.loadData}>Get data</button>
        <table border={2} cellPadding={5}>
          <thead>
            <tr>
              {Object.keys(this.state.data).map((element) => {
                return Object.keys(this.state.data[element]).map(
                  (element2, key) => {
                    return <th key={key}>{element2}</th>;
                  }
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(this.state.data).map((element) => {
                return Object.keys(this.state.data[element]).map(
                  (element2, key) => {
                    return (
                      <td key={key}>{this.state.data[element][element2]}</td>
                    );
                  }
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
