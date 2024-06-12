/* eslint-disable no-unused-vars */
const initialDataFetcher = async (url) => {
  try {
    const res = await fetch("http://localhost:3005/start"); // Changed to dynamic
    const fetched = await res.json();
    console.log(`call to ${url} successful, first item: + `, fetched[0]);
    return fetched;
  } catch (error) {
    console.error("Nah dog, error caught in DataProvider's effect: ", error);
  }
};

export default initialDataFetcher;
