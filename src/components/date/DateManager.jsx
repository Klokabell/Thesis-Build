import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { getMonth, endOfMonth, addDays } from "date-fns";
import SetDateButton from "./SetDateButton";
import DateDisplay from "./DateDisplay";
import { gameDate, todayStock } from "../../DataProvider";
import {  updateStockArray, handleDailyUpdate } from "./updateHandler";



const DateManager = () => {
  useSignal();
  let currentDate = new Date(gameDate.value);
  
  const addDay = () => {
    let newDate = addDays(gameDate.value, 1);
    while (todayStock.value==0) {
      newDate = addDays(newDate, 1);
    }

    gameDate.value = newDate;
    sessionStorage.setItem("date", JSON.stringify(new Date(gameDate.value)));
    handleDailyUpdate();
  };

  useEffect(() => {
    const currentMonth = getMonth(currentDate) + 1;
    const monthEnd = endOfMonth(new Date(gameDate.value));
    updateStockArray(currentMonth, monthEnd);
  }, [gameDate.value]);



  return (
    <div>
      <SetDateButton addDay={addDay} />
      <DateDisplay dateValue={gameDate.value} />
    </div>
  );
};

export default DateManager;
