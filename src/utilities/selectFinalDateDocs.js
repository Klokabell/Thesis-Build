import { lastDayOfMonth, isWeekend, previousFriday, format, isEqual } from "date-fns";

import { date } from "../DataProvider";

const compareDates = (d1, d2) => {
    const date1 = format(new Date(d1), "yyyy-MM-dd");
    const date2 = format(new Date(d2), "yyyy-MM-dd");
    return isEqual(date1, date2);
  };

const filterFinalDate = async (array) => {
  let last = lastDayOfMonth(new Date(date.value));
  
  if (isWeekend(last)) {
    last = previousFriday(last);
  }

  const lastDayArray = array.filter((item) => compareDates(item.Date, last));

  return lastDayArray.length > 0 ? lastDayArray : null;
};

export default filterFinalDate;
