import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { getMonth, endOfMonth, addDays } from "date-fns";
import SetDateButton from "./SetDateButton";
import DateDisplay from "./DateDisplay";
import { gameDate, todayStock } from "../../DataProvider";
import getTodayStock from "../../utilities/sort functions/getTodayStock";
import { isUpdateDay, updatehandler } from "./updateHandler";

const DateManager = () => {
  useSignal();
  let currentDate = new Date(gameDate.value);

  const addDay = () => {
    gameDate.value = addDays(currentDate, 1);
    sessionStorage.setItem("date", JSON.stringify(new Date(gameDate.value)));
    console.log("gameDate: ", gameDate.value)
  };

  useEffect(() => {
    let currentDate = new Date(gameDate.value);
    const currentMonth = getMonth(currentDate) + 1;
    const monthEnd = endOfMonth(new Date(gameDate.value));

    const updateStockArray = async () => {
      todayStock.value = getTodayStock();

      if (isUpdateDay(currentDate, monthEnd)) {
        await updatehandler(currentMonth, currentDate);
      }
      if (!updateStockArray && todayStock.value.length === 0){
        addDay()
      }
    };
    updateStockArray();
  }, [gameDate.value]);



  return (
    <div>
      <SetDateButton addDay={addDay} />
      <DateDisplay dateValue={gameDate.value} />
    </div>
  );
};

export default DateManager;
