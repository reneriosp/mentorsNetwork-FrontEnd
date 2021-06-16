async function fetchJSON(
  url = "https://run.mocky.io/v3/02e9fb29-4516-48b1-8bd2-43e868303cb6"
) {
  /**
   * Function that takes a string url and fetches and returns the json from
   * that url.
   */

  const response = await fetch(url);

  if (response.status == 200) {
    const json = await response.json();
    return json;
  } else {
    throw new Error(`Response status: ${response.status}`);
  }
}

export default fetchJSON;
