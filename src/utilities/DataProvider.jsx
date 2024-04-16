import { createContext, useRef, useState } from "react";
import { signal, effect } from "@preact/signals-react";
import dataFetcher from "./dataFetcher";
import filterCurrentStock from "./sort functions/filterCurrentStock";
//import dateFormatter from "./dateFormatter";
import App from "../App";
export const StockState = createContext();
export const stockSignal = signal([]);
export const todayStock = signal([]);
export const selectedStock = signal("");
export const selectedHistory = signal([]);
export const chartArray = signal([])
export const sliceValue = signal(1)
export const date = signal(new Date("2016-01-04T00:00:00.000+00:00"));
export const chartType = new signal("candlestick")
export const timeframe = new signal(1)

const DataProvider = () => {
  const [week, setWeek] = useState(1);
  const startURL = "http://localhost:3005/start";
  //const updateURL = "http://localhost:3005/update";
  // const dateObject = dateFormatter(date.value);
  const fetchedRef = useRef(false);

  effect(() => {
    const fetchAndSet = async () => {
        try {
          const fetchedData = await dataFetcher(startURL);
          stockSignal.value = fetchedData;
          todayStock.value = filterCurrentStock(stockSignal.value);
          console.log("todayStock", todayStock.value[0])
          fetchedRef.current = true;
          chartArray.value = todayStock.value
        } catch (err) {
          console.error("fetchAndSet error, startURL: ", err);
          fetchedRef.current = false
        }
    };
    fetchAndSet();
  });

  return (
    <StockState.Provider value={{ date, week, setWeek, fetchedRef }}>
      <App />
    </StockState.Provider>
  );
};

export default DataProvider;
