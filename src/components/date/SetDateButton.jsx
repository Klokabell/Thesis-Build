import { useRef } from "react";
import { date, todayStock, currentMonthStocks } from "../../DataProvider"
import getTodayStock from "../../utilities/sort functions/getTodayStock";
import { dateToValuesFormatter, addDay } from "../../utilities/dateManager";
import updateDataFetcher from "../../utilities/updateDataFetcher";


const SetDateButton = () => {
  const futureStocksRef = useRef([]);
  const currentMonthRef = useRef(dateToValuesFormatter(new Date(date.value)).month);

  const advanceTime = async () => {
    const currentDate = new Date(date.value);
    const { day, month, week, weekDay } = dateToValuesFormatter(currentDate);
    console.log("day: ", day, "month: ", month, "week: ", week, "weekDay:", weekDay);

    if (day === 25) {
      futureStocksRef.current = await updateDataFetcher(month + 1);
      console.log(
        "month changed, futureStocksRef.current:",
        futureStocksRef.current
      );
    }

    if (currentMonthRef.current !== month) {
      currentMonthStocks.value = futureStocksRef.current;
      console.log("monthStocks", currentMonthStocks.value);
      currentMonthRef.current = month;
    }
    const tmrw = addDay(currentDate)
    date.value = tmrw
    sessionStorage.setItem("date", JSON.stringify(tmrw));

    if (futureStocksRef.current.length>0) {
      console.log("futureStocksRef.current", futureStocksRef.current.length);
      todayStock.value = getTodayStock(currentMonthStocks.value);
    } else {
      console.log("futureStocks is not defined/empty");
    }
  };

  return (
    <button
      className="time-btn bg-slate-100 rounded-md px-1 self-center ml-8 mr-6"
      onClick={advanceTime}
    >
      Next Day
    </button>
  );
};

export default SetDateButton;
