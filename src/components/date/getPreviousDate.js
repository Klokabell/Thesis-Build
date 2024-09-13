import { subDays, subWeeks, subMonths, subYears, isWeekend } from "date-fns";

const getPreviousDate = (date, period, unit) => {
  const subPeriodObj = {
    Daily: subDays,
    Weekly: subWeeks,
    Monthly: subMonths,
    Yearly: subYears,
  };
  let prevDate;
  const subFunction = subPeriodObj[period];


  if (subFunction) {
    prevDate = subFunction(date, unit);
    while (isWeekend(prevDate)) {
      prevDate = subDays(prevDate, 1);
    }
  }
  return prevDate;

};

export default getPreviousDate