/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { signal } from "@preact/signals-react";
import currentDataFetch from "./utilities/currentDataFetch";
import getTodayStock from "./utilities/sort functions/getTodayStock";
import { dateToValuesFormatter } from "./utilities/dateTools";
import App from "./App";

export const currentDateObj = signal();
export const updateDateObj = signal()
export const selectedHistory = signal([]);
export const selectedFuture = signal([]);
export const selectedItem = signal("");
export const todayStock = signal([]);
export const currentMonthStocks = signal({});
export const nextMonthStocks = signal(null);

export const singleCandlePeriod = signal("Daily");
export const singleCandleUnit = signal(5);
export const singleLinePeriod = signal("Daily");
export const singleLineUnit = signal(5);

const checkSessionDate = async () => {
  const initialDate = new Date("2016-01-04T00:00:00.000+00:00");
  const storedDate = sessionStorage.getItem("date");
  return storedDate !== null ? JSON.parse(storedDate) : initialDate;
};

let sessionDate;

const StateManager = () => {
  const [loading, setLoading] = useState(true);

  const startURL = "http://localhost:3005/start";

  useEffect(() => {
    const initialise = async () => {
      sessionDate = await checkSessionDate();
      currentDateObj.value = dateToValuesFormatter(sessionDate);

      const fetchData = async () => {
        currentMonthStocks.value = await currentDataFetch(startURL); // retrieve the current month's data, sorted by Close value
        todayStock.value = await getTodayStock(currentMonthStocks.value);
        console.log("todayStock: ", todayStock.value.length)
        setLoading(false);
      };
      await fetchData();
    };
    initialise().catch(console.error);
  }, []);

  if (loading) {
    return <div>Retrieving Stocks</div>;
  }

  return <App />;
};

export default StateManager;
