import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { getDate, getMonth, endOfMonth, subDays } from "date-fns";
import SetDateButton from "./SetDateButton";
import DateDisplay from "./DateDisplay";
import { date } from "../../DataProvider";
import { compareDates } from "../../utilities/dateTools";
import updateFetcher from "../../utilities/updateFetcher";

const DateManager = () => {
  useSignal();


  const isUpdateDay = (thisDate, endDate) => {
    const updateDate = subDays(endDate, 3)
    const updateToday = compareDates(thisDate, updateDate)
    return updateToday
  };



  useEffect(() => {
    const currentDate = new Date(date.value);
    const monthEnd = endOfMonth(new Date(date.value));

    if (isUpdateDay(currentDate, monthEnd)) {
      console.log("month ending soon");
    }

    return () => {
      console.log("effect ending");
    };
  }, [date.value]);

  return (
    <div>
      <SetDateButton />
      <DateDisplay dateValue={date.value} />
    </div>
  );
};

export default DateManager;
