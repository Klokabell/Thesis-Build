/* import { signal } from "@preact/signals-react";
import updateStock from "./sort functions/filterStock";

const setCurrentDaySignal = async (date, stockSignal, fetchedData) => {
  const currentStock = signal(null)
    try {
      currentStock.value = signal(updateStock(date, fetchedData));
    } catch (err) {
      console.error("DataProvider failed to fetch data: ", err);
    }
  }

export default setCurrentDaySignal;
 */