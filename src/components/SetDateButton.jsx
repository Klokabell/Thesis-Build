import { useRef } from "react";
import { date, todayStock, monthStocks } from "../DataProvider";
import getTodayStock from "../utilities/sort functions/getTodayStock";
import { dateFormatter, addDay } from "../utilities/dateManager";
import updateDataFetcher from "../utilities/updateDataFetcher";

const SetDateButton = () => {
  const futureStocksRef = useRef([]);
  const currentMonthRef = useRef(dateFormatter(new Date(date.value)).month);


  console.log("currentMonth", currentMonthRef.current);


  const advanceTime = async () => {
    const currentDate = new Date(date.value);
    const { day, month } = dateFormatter(currentDate);
    console.log("day: ", day, "month: ", month);

    if (day === 25) {
      futureStocksRef.current = await updateDataFetcher(month + 1);
      console.log("month changed, futureStocksRef.current:", futureStocksRef.current);
    }

    if (currentMonthRef.current !== month) {
      monthStocks.value = futureStocksRef.current;
      console.log("monthStocks", monthStocks.value);
      currentMonthRef.current = month ;
    }
    addDay(currentDate);

    if (futureStocksRef.current.length > 0) {
      console.log("futureStocksRef.current", futureStocksRef.current.length);
      todayStock.value = getTodayStock(monthStocks.value);
    } else {
      console.log("monthStocks is not defined/empty");
    }
  };

  return (
    <button className="time-btn" onClick={advanceTime}>
      Next Day
    </button>
  );
};

export default SetDateButton;
