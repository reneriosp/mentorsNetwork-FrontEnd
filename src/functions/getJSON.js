// getJSON.js
async function getJSON(url = "http://localhost:3001/db") {
  /**
   * Function that takes a string url and fetches and returns the json from
   * that url.
   */

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
  });

  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  } else {
    throw new Error(`Response status: ${response.status}`);
  }
}

export default getJSON;
