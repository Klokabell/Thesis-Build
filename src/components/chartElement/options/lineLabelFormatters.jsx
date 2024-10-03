import { parseISO, format, isValid } from "date-fns";

const lineLabelFormatters = (value, unit, period, index) => {
  if (value) {
    const parsedValue = parseISO(value);
    const thisDate = new Date(parsedValue);
    switch (period) {
      case "Daily":
        return dailyLabel(thisDate, unit, index);
      case "Weekly":
        return weeklyLabel();
      case "Monthly":
        return monthlyLabel();
      case "Yearly":
        return yearlyLabel();
      default:
        return "";
    }
  }
};

const dailyLabel = (thisDate, unit) => {
  let displayDate;
  if (isValid(thisDate)) {
    if (unit <= 50) {
      displayDate = format(thisDate, "d/M/yyyy");
    } else displayDate = format(thisDate, "d/M/yyyy")
  }
  return displayDate;
};

const weeklyLabel = () => {};
const monthlyLabel = () => {};
const yearlyLabel = () => {};

export default lineLabelFormatters;
