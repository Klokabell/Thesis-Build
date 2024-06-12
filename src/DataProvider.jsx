import { createContext, useState, useEffect } from "react";
import { signal, effect } from "@preact/signals-react";
import initialDataFetcher from "./utilities/initialDataFetcher";
import getTodayStock from "./utilities/sort functions/getTodayStock";
import App from "./App";

export const StockState = createContext();

export const todayStock = signal([]);
export const selectedStock = signal("");
export const selectedHistory = signal([]);
export const chartType = signal("candlestick");
export const monthStocks = signal({});

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
  const startURL = "http://localhost:3005/start";

  useEffect(() => {
    const fetchData = async () => {
      monthStocks.value = await initialDataFetcher(startURL);
      todayStock.value = await getTodayStock(monthStocks.value);
      console.log("date.value:", date.value);
      setLoading(false);
    };
    fetchData();
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
