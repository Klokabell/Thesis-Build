import {
  addDays,
  format,
  getDate,
  getDayOfYear,
  getWeek,
  getMonth,
  getYear,
  compareDesc,
  subWeeks,
  subMonths,
  subDays,
  subYears,
  isWeekend,
  startOfYear,
  startOfMonth,
  startOfWeek,
  startOfDay,
  endOfWeek,
  endOfMonth,
  addWeeks,
  addMonths,
  isEqual,
  formatISO,
} from "date-fns";

const convertPeriod = {
  Daily: "Date",
  Weekly: "week",
  Monthly: "month",
  Yearly: "year",
};

const timeCount = {
  candlestick: {
    Daily: [5, 10, 30, 90],
    Weekly: [...Array(12).keys()].map((i) => i + 1),
    Monthly: [...Array(12).keys()].map((i) => i + 1),
    Yearly: [1, 2, 3, 4, 5],
  },
  line: {
    Daily: [10, 15, 30, 60, 90, 120],
    Weekly: [4, 8, 12, 24, 52],
    Monthly: [3, 6, 9, 12, 18, 24, 36],
    Yearly: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

const dateFormatter = (date) => format(new Date(date), "cccc d/M/yyyy");

const isWeekday = (date) => {
  const dayOfWeek = date.getDay();
  return dayOfWeek !== 0 && dayOfWeek !== 6; // 0 = Sunday, 6 = Saturday
};

const dateToValuesFormatter = (inputDate) => {
  const date = new Date(inputDate);
  const day = getDayOfYear(date);
  const month = getMonth(date) + 1;
  const week = getWeek(date);
  const year = getYear(date);
  const weekDay = formatISO(date, "EEEE");

  return {
    date: date.toISOString(),
    day,
    month,
    week,
    year,
    weekDay,
  };
};

const matchDate = (date1, date2) => {
  return getDate(date1) === date2;
};


const valuesToDateFormatter = (values) => {
  return format(new Date(values.year, values.day, values.month), "dd/MM/yyyy");
};

const findPreviousDate = (dateValue, period, units) => {
  const startDate = new Date(dateValue);

  return period == "Daily"
    ? subDays(startDate, units)
    : period == "Weekly"
    ? subWeeks(startDate, units)
    : period == "Monthly"
    ? subMonths(startDate, units)
    : subYears(startDate, units);
};

const limitSeriesDaily = (array, period, units, dateValue) => {
  const currentDate = new Date(dateValue);

  let prevDate = findPreviousDate(currentDate, period, units);
  while (isWeekend(prevDate)) {
    prevDate = subDays(prevDate, 1);
  }

  const dateIndex = array.findIndex((item) => {
    return compareDesc(prevDate, new Date(item.Date)) < 0;
  });
  return array.slice(0, dateIndex);
};

const limitOtherSeries = (array, units) => {
  const recentArray = array.slice(0, units);
  return recentArray;
};

const formatDateLabels = (val, period) => {
  switch (period) {
    case "Daily":
      return val;
    case "Yearly":
      return startOfYear(val);
    case "Monthly":
      return `Month Starting ${val}`;
    case "Weekly":
      return `Week Starting ${val}`;
  }
};

const compareDates = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  return isEqual(startOfDay(date1), startOfDay(date2));
};

const periodStarts = (year, unit) => {
  const yearStart = new Date(year, 0, 1);
  let setWeek;
  let setMonth;

  switch (unit) {
    case "month":
      setMonth = addMonths(yearStart, unit - 1);
      return startOfMonth(setMonth, { weekStartsOn: 1 });
    case "week":
      setWeek = addWeeks(yearStart, unit - 1);
      return startOfWeek(setWeek, { weekStartsOn: 1 });
  }
};

const periodStartDate = (year, unit, period) => {
  const yearStart = new Date(year, 0, 1);
  let setMonth;
  let setWeek;
  if (!period) return yearStart;
  else {
    switch (period) {
      case "week":
        setWeek = addWeeks(yearStart, unit - 1);
        return format(startOfWeek(setWeek, { weekStartsOn: 1 }), "w yyyy");
      case "month":
        setMonth = addMonths(yearStart, unit - 1);
        return format(startOfMonth(setMonth), "LLL yyyy");
    }
  }
};

const periodSpan = (year, period, unit) => {
  const yearStart = new Date(year, 0, 1);
  let setWeek;
  let setMonth;
  let startDate;
  let endDate;

  switch (period) {
    case "month":
      setMonth = addMonths(yearStart, unit);
      startDate = format(startOfMonth(setMonth), "PP");
      endDate = format(endOfMonth(setMonth), "'-' PP");
      return { startDate, endDate };

    case "week":
      setWeek = addWeeks(yearStart, unit);
      startDate = format(startOfWeek(setWeek, { weekStartsOn: 1 }), "PP");
      endDate = format(endOfWeek(setWeek, { weekStartsOn: 1 }), "'-' PP");
      return { startDate, endDate };
  }
};

const getNextMonthStartDate = (date) => {
  const currentDate = new Date(date);
  const nextMonthStart = startOfMonth(addMonths(currentDate, 3));
  return nextMonthStart;
};

const isUpdateDay = (thisDate) => {
  const monthEnd = endOfMonth(thisDate);
  const updateDate = subDays(monthEnd, 3);
  return compareDates(thisDate, updateDate);
};

const getDateFromDayNumber = (dayNum, year) => {
  const yearStart = new Date(year, 0, 1);
  return addDays(yearStart, dayNum);
};

export {
  dateToValuesFormatter,
  matchDate,
  valuesToDateFormatter,
  findPreviousDate,
  limitSeriesDaily,
  limitOtherSeries,
  formatDateLabels,
  dateFormatter,
  periodStarts,
  periodStartDate,
  compareDates,
  periodSpan,
  isWeekday,
  getNextMonthStartDate,
  isUpdateDay,
  getDateFromDayNumber,
  timeCount,
};

export { convertPeriod };
