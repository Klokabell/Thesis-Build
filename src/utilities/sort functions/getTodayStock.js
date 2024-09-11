import { gameDate } from "../../DataProvider";
import { compareDates } from "../dateTools";
import { currentMonthStocks } from "../../DataProvider";

const getTodayStock = () => {
  const currentDate = gameDate.value;
  const monthData = currentMonthStocks.value;

  const filteredStock = monthData.filter((stock) => {
    const stockDate = stock.Date;
    return compareDates(currentDate, stockDate);
  });

  const currentStockArray = filteredStock.map((item) => ({
    ...item,
    id: item._id, //searchbar needs id instead of _id
  }));
  return currentStockArray;
};

export default getTodayStock;
