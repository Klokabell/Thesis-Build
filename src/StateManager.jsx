/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import currentDataFetch from "./utilities/currentDataFetch";
import getTodayStock from "./utilities/sort functions/getTodayStock";
import { dateToValuesFormatter } from "./utilities/dateTools";
import App from "./App";
import {
  currentDateObj,
  currentMonthStocks,
  todayStock,
} from "./utilities/signalManager";
import { checkSessionDate } from "./components/date/dateHelpers/checkSessionDate";

const StateManager = () => {
  const [loading, setLoading] = useState(true);
  const startURL = "http://localhost:3005/start";

  useEffect(() => {
    const initialise = async () => {
      const sessionDate = await checkSessionDate();
      currentDateObj.value = dateToValuesFormatter(sessionDate);

      const fetchData = async () => {
        currentMonthStocks.value = await currentDataFetch(startURL); // retrieve the current month's data, sorted by Close value
        todayStock.value = await getTodayStock(currentMonthStocks.value);
        console.log("todayStock: ", todayStock.value.length);
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
