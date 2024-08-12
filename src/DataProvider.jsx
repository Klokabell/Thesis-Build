import { createContext, useState, useEffect, useRef } from "react";
import { signal, effect } from "@preact/signals-react";
import currentDataFetch from "./utilities/currentDataFetch";
import getTodayStock from "./utilities/sort functions/getTodayStock";
import App from "./App";

export const StockState = createContext();

export const todayStock = signal([]);
export const selectedStock = signal("");
export const selectedHistory = signal([]);
export const chartType = signal("candlestick");
export const monthStocks = signal({});
export const selectedGranularity = signal("Daily");


const checkSessionDate = async () => {
  const initialDate = new Date("2016-01-04T00:00:00.000+00:00");
  const storedDate = sessionStorage.getItem("date");
  return storedDate !== null ? new Date(JSON.parse(storedDate)) : initialDate;
};


export const date = signal(await checkSessionDate());

effect(() => {
  console.log("date", date.value);
  sessionStorage.setItem("date", JSON.stringify(date.value));
});

const DataProvider = () => {
  const [week, setWeek] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetched = useRef(false);

  const startURL = "http://localhost:3005/start";

  useEffect(() => {
    const fetchData = async () => {
      monthStocks.value = await currentDataFetch(startURL); // retrieve the upcoming month's data
      // selectedHistory.value = monthStocks.value
      todayStock.value = await getTodayStock(monthStocks.value); // limit to the current date stocks
      console.log("todayStock.value", todayStock.value[0])
      console.log("todayStock.value", todayStock.value.length)
      setLoading(false);
      fetched.current = true
    };
    if(!fetched.current){fetchData();}
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
