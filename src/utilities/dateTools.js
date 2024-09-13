import {
  format,
  getDate,
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
} from "date-fns";

const convertPeriod = {
  Daily: "Date",
  Weekly: "week",
  Monthly: "month",
  Yearly: "year",
};

const dateFormatter = (date) => format(new Date(date), "cccc d/M/yyyy")


const dateToValuesFormatter = (inputDate) => {
  const date = new Date(inputDate);
  const day = getDate(date);
  const month = getMonth(date) + 1;
  const week = getWeek(date);
  const year = getYear(date);
  const weekDay = format(date, "EEEE");

  return {
    day,
    month,
    week,
    year,
    weekDay,
  };
};

const matchDate = (date1, date2) =>{
  return getDate(date1) === date2
} 

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
      return val
    case "Yearly": 
      return startOfYear(val)
    case "Monthly":
      return `Month Starting ${val}`
    case "Weekly": 
      return `Week Starting ${val}`
  }
};

const compareDates = (d1, d2) => {
  const date1 = new Date(d1)
  const date2 = new Date(d2)
  return isEqual(startOfDay(date1), startOfDay(date2))
}

const periodStarts = (year, unit) => {
  const startDate = new Date(year, 0, 1)
  let setWeek
  let setMonth

  switch(unit) {
    case "month": 
    setMonth = addMonths(startDate, unit-1)
    return startOfMonth(setMonth, { weekStartsOn: 1})
    case "week": 
      setWeek = addWeeks(startDate, unit - 1)
      return startOfWeek(setWeek, { weekStartsOn: 1})
  }
}

const periodSpan = (year, period, unit) => {
  const yearStart = new Date(year, 0, 1)
  let setWeek
  let setMonth
  let startDate
  let endDate

  switch(period) { 
    case "month": 
    setMonth = addMonths(yearStart, unit)
    startDate = format(startOfMonth(setMonth), "PP")
    endDate = format(endOfMonth(setMonth), "'-' PP")
    return { startDate, endDate }

    case "week": 
      setWeek = addWeeks(yearStart, unit)
      startDate = format(startOfWeek(setWeek, { weekStartsOn: 1}), "PP" )
      endDate = format(endOfWeek(setWeek, { weekStartsOn: 1}), "'-' PP")
    return { startDate, endDate }
  }
}

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
  compareDates,
  periodSpan,
  convertPeriod
};
