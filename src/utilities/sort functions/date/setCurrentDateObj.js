import { dateToValuesFormatter } from "../../dateTools";

const setCurrentDateObject = (date) => {
  const {
    day: currentDay,
    week: currentWeek,
    month: currentMonth,
    year: currentYear,
    weekDay: currentWeekDay,
  } = dateToValuesFormatter(date);

  return {
    date,
    day: currentDay,
    week: currentWeek,
    month: currentMonth,
    year: currentYear,
    weekDay: currentWeekDay
  }
};

export default setCurrentDateObject;