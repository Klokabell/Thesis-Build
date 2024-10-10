import { periodStartDate } from "../../../../../utilities/dateTools";

const formatLineCloseData = (array, period) => {
  const lineData = array.map((stock) => ({
    x:
      period === "Date"
        ? stock[period]
        : periodStartDate(stock.year, stock[period], period),
    y: stock.Close,
  }));

  return lineData;
};

export default formatLineCloseData;
