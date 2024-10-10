import { format, isValid, parseISO } from "date-fns";

const dailyLabelFormatter = (value, unit, index) => {
  let displayDate;
  if (value) {
    const parsedValue = parseISO(value);
    const thisDate = new Date(parsedValue);

    if (value && isValid(thisDate)) {
      if (unit <= 50) {
        displayDate = format(thisDate, "d/M/yyyy");
      } else index % 5 ? (displayDate = format(thisDate, "d/M/yyyy")) : "";
    }
  }
  return displayDate;
};

export default dailyLabelFormatter;
