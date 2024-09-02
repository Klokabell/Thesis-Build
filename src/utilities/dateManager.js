import { getDate, getWeek, getMonth, getYear, format,  addDays } from "date-fns";

const dateToValuesFormatter = (inputDate) => {
  const date = new Date(inputDate);
  const day = getDate(date);
  const month = getMonth(date) + 1;
  const week = getWeek(date);
  const year = getYear(date);
  const weekDay = format(date, "EEEE")

  return {
    day,
    month,
    week,
    year,
    weekDay
  };
};

const valuesToDateFormatter = (values) => {
  return format(new Date(values.year, values.month, values.day), "MM/dd/yyyy");
};

const addDay = (inputDate) => {
  const currentDate = new Date(inputDate);
  return addDays(currentDate, 1)
};

export { dateToValuesFormatter, addDay, valuesToDateFormatter };
