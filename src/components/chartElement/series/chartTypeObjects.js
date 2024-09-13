import { format, parse } from "date-fns";

const candleTypes = {
  singleDaily: (array) =>
    array.map((item) => ({
      x: format(new Date(item.Date), "d/M/yyyy"),
      y: [item.Open, item.High, item.Low, item.Close],
    })),
  singleOther: (array, period) =>
    array.map((item) => {
      const date = parse(
        `${item[period]}`,
        `${period === "week" ? "I" : "M"}`,
        new Date(item.year, 0, 1)
      ); //set the full date for the start of the given month/week
      return {
        x: format(date, `${period === "week" ? "eee d yyyy" : "MMM yyyy"}`), //format according to it being a week or a month period
        y: [item.Open, item.High, item.Low, item.Close],
      };
    }),
  singleYearly: (array) =>
    array.map((item) => ({
      x: format(new Date(item.year), "yyyy"),
      y: [item.Open, item.High, item.Low, item.Close],
    })),
};


export { candleTypes }