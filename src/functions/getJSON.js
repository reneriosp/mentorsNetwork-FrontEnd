// getJSON.js
async function getJSON(
  url = "https://my-json-server.typicode.com/jql6/mock-api/db"
) {
  /**
   * Function that takes a string url and fetches and returns the json from
   * that url.
   */

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
  });

  if (response.status == 200) {
    const json = await response.json();
    return json;
  } else {
    throw new Error(`Response status: ${response.status}`);
  }
}

export default getJSON;
