// UserTable.js
import React, { useState } from "react";
import fetchJSON from "../functions/fetchJSON";

function UserTable(props) {
  /* Placeholder table until we load the data */
  const [data, setData] = useState({
    identity: { id: null, login: null },
    permissions: { roles: null },
  });
  const [loading, setLoading] = useState(false);

  async function loadData() {
    setLoading(true);
    // Downloading json
    try {
      const JSONData = await fetchJSON();
      setData(JSONData);
    } catch (error) {
      console.error(error);
    }
    // When download is finished, it's no longer loading
    setLoading(false);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={loadData}>Get data</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border={2} cellPadding={5}>
          <thead>
            <tr>
              {Object.keys(data).map((element) => {
                return Object.keys(data[element]).map((element2, key) => {
                  return <th key={key}>{element2}</th>;
                });
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(data).map((element) => {
                return Object.keys(data[element]).map((element2, key) => {
                  return <td key={key}>{data[element][element2]}</td>;
                });
              })}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserTable;
