// postJSON.js
async function postJSON(url = "http://localhost:3001/users") {
  /**
   * Function that takes a string url and fetches and returns the json from
   * that url.
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

  if (response.status == 200) {
    const json = await response.json();
    return json;
  } else {
    throw new Error(`Response status: ${response.status}`);
  }
}

export default postJSON;
