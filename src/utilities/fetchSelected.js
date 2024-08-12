import { effect, signal } from "@preact/signals-react";
import { selectedStock } from "../DataProvider";
import { selectedGranularity } from "../DataProvider";

const url = "http://localhost:3005/company";
let selectedHistory = signal([]);


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

    selectedHistory.value = await response.json();
    console.log("selectedHistory.value", selectedHistory.value)
    effect(() => {
      selectedGranularity.value = selectedHistory.Daily;
    });
  } catch (err) {
    console.error("fetchSelected Error", err);
  }
};

export { fetchSelected };
