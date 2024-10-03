import { dateToValuesFormatter } from "./dateTools";
import { gameDate } from "./createGameDate";

const currentDataFetch = async (url) => {
  const { month } = dateToValuesFormatter(gameDate.value);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ month }),
    });
    const fetched = await res.json();
    console.log(`currentDataFetch success: ${fetched.length} items fetched`);
    return fetched;
  } catch (error) {
    console.error("Nah dog, error caught in DataProvider's effect: ", error);
  }
};

export default currentDataFetch;