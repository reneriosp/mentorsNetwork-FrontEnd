import React, { Component } from "react";

class FetchComponent extends Component {
  constructor(props) {
    super(props);
    this.fetchJSON = this.fetchJSON.bind(this);
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
  /* Fetches json from mocky API */
  async fetchJSON() {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/02e9fb29-4516-48b1-8bd2-43e868303cb6"
      );
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
    /* For debugging */
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.fetchJSON}>Get data</button>
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

export default FetchComponent;
