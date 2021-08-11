// apiHandler.js

const apiHandler = (() => {
  async function getJSON(url = "http://localhost:3001/db") {
    /**
     * Function that takes a string url and fetches and returns the json from
     * that url.
     */

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });

    // Get the json from the response if the response is ok
    if (response.ok) {
      // Get the json file
      const json = await response.json();
      return json;
    } // Otherwise, throw an error and show what the response status was
    else {
      // Show the data
      console.log(response.json());
      throw new Error(
        `Response status: ${response.status} ${response.statusText}`
      );
    }
  }

  async function postJSON(url = "http://localhost:3001/users") {
    /**
     * Function that adds a user to the users array in db.json
     */

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        id: "1a1a2a",
        login: "Georgathan Doe",
        role: "Admin",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Get the json from the response if the response is ok
    if (response.ok) {
      const json = await response.json();
      return json;
    } // Otherwise, throw an error and show the response status
    else {
      // Show the data
      console.log(response.json());
      throw new Error(
        `Response status: ${response.status} ${response.statusText}`
      );
    }
  }

  return { getJSON, postJSON };
})();

export default apiHandler;
