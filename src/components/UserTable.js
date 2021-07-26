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
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
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
      await postJSON();
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
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
              {Object.keys(data.users[0]).map((columnName, key) => {
                return (
                  <td key={key}>
                    <strong>{columnName}</strong>
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.users.map((user) => {
              return (
                <tr key={user.id}>
                  {Object.keys(user).map((columnElement, index) => {
                    // Number of columns should be constant, therefore use
                    // index as part of key
                    return (
                      <td key={`${user.id}-${index}`}>{user[columnElement]}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserTable;
