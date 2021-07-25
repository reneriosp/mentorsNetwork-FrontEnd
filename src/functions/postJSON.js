// postJSON.js
async function postJSON(url = "http://localhost:3001/identity") {
  /**
   * Function that takes a string url and fetches and returns the json from
   * that url.
   */

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      id: "1b2b3c",
      login: "George Doe",
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
