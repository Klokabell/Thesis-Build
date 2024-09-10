/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useRef } from "react";
import { signal, effect, computed } from "@preact/signals-react";
import currentDataFetch from "./utilities/currentDataFetch";
import getTodayStock from "./utilities/sort functions/getTodayStock";
import { dateFormatter } from "./utilities/dateTools";
import App from "./App";

import selectFinalDate from "./utilities/selectFinalDateDocs";

export const StockState = createContext();
export const selectedHistory = signal([]);
export const selectedName = signal("");
export const todayStock = signal([]);
export const currentMonthStocks = signal({});
export const nextMonthStocks = signal(null);
export const selectedMetric = signal("Daily");
export const singleCandlePeriod = signal("Daily");
export const singleCandleUnit = signal(5);
export const singleLinePeriod = signal("Daily");
export const singleLineUnit = signal(5);

const checkSessionDate = async () => {
  const initialDate = new Date("2016-01-04T00:00:00.000+00:00");
  const storedDate = sessionStorage.getItem("date");
  return storedDate !== null ? new Date(JSON.parse(storedDate)) : initialDate;
};

export const date = signal(await checkSessionDate());
export const dateObject = computed(() => dateFormatter(date.value));

effect(() => {
  sessionStorage.setItem("date", JSON.stringify(date.value));
});

const DataProvider = () => {
  const [week, setWeek] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetched = useRef(false);

  const startURL = "http://localhost:3005/start";

  useEffect(() => {
    const fetchData = async () => {
      currentMonthStocks.value = await currentDataFetch(startURL); // retrieve the current month's data, sorted by Close value
      console.log("currentMonthStocks", currentMonthStocks.value);
      const finalDateArray = await selectFinalDate(currentMonthStocks.value);
      console.log("finalDateArray", finalDateArray);

      todayStock.value = await getTodayStock(currentMonthStocks.value); // limit to the current date stocks
      setLoading(false);
      fetched.current = true;
    };
    if (!fetched.current) {
      fetchData();
    }
  }, []);

  if (loading) {
    return <div>Retrieving Stocks</div>;
  }

  return (
    <StockState.Provider value={{ week, setWeek }}>
      <App />
    </StockState.Provider>
  );
};

export default DataProvider;
