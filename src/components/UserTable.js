// UserTable.js
import React, { useState } from "react";
import getJSON from "../functions/getJSON";
import postJSON from "../functions/postJSON";
import makeUser from "./makeUser";

/**
 * To do:
 *
 * Return promise
 * Create handler to show message to user or detect errors
 * (REST API standard such as 404)
 * Make a post method
 *
 * If you return error to setState, it will crash everything
 *
 * make a user class that makes use of the api
 *
 * users page -> users:getUsers -> apiGET -> getUsers()
 *
 */

function UserTable(props) {
  /* Placeholder table until we load the data */
  const initialUsers = makeUser();
  const [data, setData] = useState({ users: [initialUsers] });
  const [loading, setLoading] = useState(false);
  async function loadData() {
    setLoading(true);
    // Downloading json
    try {
      const JSONData = await getJSON();
      setData(JSONData);
    } catch (error) {
      console.error(error);
    }
    // When download is finished, it's no longer loading
    setLoading(false);
  }

  async function uploadData() {
    setLoading(true);
    try {
      const JSONData = await postJSON();
      console.log(JSONData);
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
      <button onClick={uploadData}>Post data</button>
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
