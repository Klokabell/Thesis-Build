import dateFormatter from "./dateManager"
import { date } from "../DataProvider";


const currentDataFetch = async (url) => {
  const { month } = dateFormatter(date.value)

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ month }),
    }); // Change to dynamic
    const fetched = await res.json();
    console.log(`call to ${url} successful, first item: + `, fetched[0]);
    return fetched;
  } catch (error) {
    console.error("Nah dog, error caught in DataProvider's effect: ", error);
  }
};

export default currentDataFetch;
