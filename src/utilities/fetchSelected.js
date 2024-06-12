import { batch, signal } from "@preact/signals-react";
import { selectedStock } from "../DataProvider";

const url = "http://localhost:3005/company";
let selectedDaily = signal([]);
let selectedWeekly = signal([]);

const fetchSelected = async () => {
  const { Symbol, Date } = selectedStock.value;
  //  console.log("fetchSelected Symbol: ", Symbol)

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Symbol, Date }),
    });

    const stockHistory = await response.json();
    //    console.log("stockHistory", stockHistory)
    batch(() => {
      selectedDaily.value = stockHistory.Daily;
      selectedWeekly.value = stockHistory.Weekly;
    });
    console.log(
      "selectedDaily: ",
      selectedDaily.value,
      "selectedWeekly: ",
      selectedWeekly.value
    );
  } catch (err) {
    console.error("fetchSelected Error", err);
  }
};

export { selectedDaily, selectedWeekly, fetchSelected };
